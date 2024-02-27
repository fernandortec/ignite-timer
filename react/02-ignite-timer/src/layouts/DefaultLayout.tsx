import { Outlet } from 'react-router-dom'
import { Header } from '../component/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
