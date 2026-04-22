import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: true,

      toggle: () => {
        const next = !get().isDark
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
        set({ isDark: next })
      },

      init: () => {
        const isDark = get().isDark
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
      },
    }),
    { name: 'loop-market-theme' }
  )
)
