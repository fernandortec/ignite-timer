import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { HandPalm, Play } from 'phosphor-react'
import { useEffect, useState } from 'react'
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

type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const { register, handleSubmit, watch, reset } = useForm<
    z.infer<typeof newCycleFormSchema>
  >({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

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

    reset()
  }

  const handleInterruptCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycle?.id) {
          return { ...cycle, interupteDate: new Date() }
        }
        return cycle
      }),
    )
    setActiveCycleId(null)
    setAmountSecondsPassed(0)
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padEnd(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

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
            disabled={!!activeCycle}
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
            disabled={!!activeCycle}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.Form>

        <S.Countdown>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <S.Separator>:</S.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </S.Countdown>

        {activeCycle ? (
          <S.StopCountdownButton type="button">
            <HandPalm size={24} /> Começar
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton type="submit">
            <Play size={24} /> Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.Home>
  )
}
