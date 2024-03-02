import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as S from './styles'

const newCycleFormSchema = z.object({
  task: z.string().min(1, { message: 'Informe a tarefa' }),
  minutesAmount: z
    .number()
    .min(5, { message: 'o Ciclo precisa ser no mínimo 5 minutos' })
    .max(60, { message: 'O ciclo precisa ser de no máximo 60 minutos' }),
})

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<
    z.infer<typeof newCycleFormSchema>
  >({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: z.infer<typeof newCycleFormSchema>) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.Home>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.Form>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Refatorar componente de estilização" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.Form>

        <S.Countdown>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.Countdown>

        <S.StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Começar
        </S.StartCountdownButton>
      </form>
    </S.Home>
  )
}
