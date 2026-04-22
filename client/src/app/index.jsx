import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './providers/router'
import { useUserStore } from '../entities/user'
import { useThemeStore } from '../features/theme'
import './styles/global.css'

export const App = () => {
  const init = useUserStore((state) => state.init)
  const initTheme = useThemeStore((state) => state.init)

  useEffect(() => {
    initTheme()
    const unsubscribe = init()
    return unsubscribe
  }, [init, initTheme])

  return <RouterProvider router={router} />
}
