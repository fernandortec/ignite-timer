import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { CyclesContext } from '../../context/CycleContext'
import { Countdown } from './components/countdown'
import { NewCycleForm } from './components/newCycleForm'
import * as S from './styles'

const newCycleFormSchema = z.object({
  task: z.string().min(1, { message: 'Informe a tarefa' }),
  minutesAmount: z
    .number()
    .min(1, { message: 'o Ciclo precisa ser no mínimo 5 minutos' })
    .max(60, { message: 'O ciclo precisa ser de no máximo 60 minutos' }),
})

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const form = useForm<z.infer<typeof newCycleFormSchema>>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: z.infer<typeof newCycleFormSchema>) {
    createNewCycle(data)
    form.reset()
  }

  const task = form.watch('task')
  const isSubmitDisabled = !task

  return (
    <S.Home>
      <form onSubmit={form.handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...form}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopCountdownButton
            disabled={!isSubmitDisabled}
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} /> Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.Home>
  )
}
