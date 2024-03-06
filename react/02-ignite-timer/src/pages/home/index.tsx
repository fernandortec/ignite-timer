import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { createContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Countdown } from './components/countdown'
import { NewCycleForm } from './components/newCycleForm'
import * as S from './styles'

type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  finishedDate?: Date
  interruptedDate?: Date
}

interface CyclesContextData {
  activeCycle?: Cycle
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext<CyclesContextData>({
  activeCycleId: '',
  markCurrentCycleAsFinished: () => null,
  amountSecondsPassed: 0,
  setSecondsPassed: () => null,
})

const newCycleFormSchema = z.object({
  task: z.string().min(1, { message: 'Informe a tarefa' }),
  minutesAmount: z
    .number()
    .min(1, { message: 'o Ciclo precisa ser no mínimo 5 minutos' })
    .max(60, { message: 'O ciclo precisa ser de no máximo 60 minutos' }),
})

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const form = useForm<z.infer<typeof newCycleFormSchema>>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycle?.id) {
          return { ...cycle, interupteDate: new Date() }
        }
        return cycle
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleCreateNewCycle(data: z.infer<typeof newCycleFormSchema>) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    form.reset()
  }

  const handleInterruptCycle = () => {
    setActiveCycleId(null)
  }

  const task = form.watch('task')
  const isSubmitDisabled = !task

  return (
    <S.Home>
      <form onSubmit={form.handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
          <FormProvider {...form}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <S.StopCountdownButton
            disabled={isSubmitDisabled}
            onClick={handleInterruptCycle}
            type="button"
          >
            <HandPalm size={24} /> Começar
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
