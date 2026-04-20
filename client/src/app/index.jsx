import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './providers/router'
import { useUserStore } from '../entities/user'
import './styles/global.css'

export const App = () => {
  const init = useUserStore((state) => state.init)

  useEffect(() => {
    const unsubscribe = init()
    return unsubscribe
  }, [init])

  return <RouterProvider router={router} />
}
