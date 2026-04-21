import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const MAX_ITEMS = 10

export const useRecentViewedStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const items = get().items.filter((item) => item.id !== product.id)
        set({
          items: [product, ...items].slice(0, MAX_ITEMS),
        })
      },

      clearItems: () => set({ items: [] }),
    }),
    {
      name: 'loop-market-recent-viewed',
    }
  )
)
