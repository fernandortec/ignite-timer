import { Play } from 'phosphor-react'
import * as S from './styles'

export function Home() {
  return (
    <S.Home>
      <form>
        <S.Form>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">Durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </S.Form>

        <S.Countdown>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.Countdown>

        <button type="submit">
          <Play size={24} /> Começar
        </button>
      </form>
    </S.Home>
  )
}
