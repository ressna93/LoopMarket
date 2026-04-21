import { Router } from 'express'
import { PRODUCTS } from '../data/products.js'

const router = Router()

// GET /api/products?category=&search=&sort=&minPrice=&maxPrice=
router.get('/', (req, res) => {
  const { category, search, sort, minPrice, maxPrice } = req.query
  let result = [...PRODUCTS]

  if (search) {
    const q = search.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.spec.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
  }

  if (category && category !== 'all') {
    result = result.filter((p) => p.categoryId === category)
  }

  if (minPrice) result = result.filter((p) => p.price >= Number(minPrice))
  if (maxPrice) result = result.filter((p) => p.price <= Number(maxPrice))

  if (sort === 'price_asc') result.sort((a, b) => a.price - b.price)
  else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price)
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

  res.json({ products: result, total: result.length })
})

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const product = PRODUCTS.find((p) => p.id === Number(req.params.id))
  if (!product) return res.status(404).json({ error: '상품을 찾을 수 없습니다.' })
  res.json(product)
})

export default router
