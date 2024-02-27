import * as S from './styles'

import { Outlet } from 'react-router-dom'
import { Header } from '../component/header'

export function DefaultLayout() {
  return (
    <S.Layout>
      <Header />
      <Outlet />
    </S.Layout>
  )
}
