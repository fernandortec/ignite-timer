import { Play } from 'phosphor-react'
import * as S from './styles'

export function Home() {
  return (
    <S.Home>
      <form>
        <S.Form>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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

        <S.StartCountdownButton disabled type="submit">
          <Play size={24} /> Começar
        </S.StartCountdownButton>
      </form>
    </S.Home>
  )
}
