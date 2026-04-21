import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterBar } from './FilterBar'
import { ProductGrid } from './ProductGrid'
import './ProductListPage.css'

const MOCK_PRODUCTS = [
  { id: 1, name: 'MacBook Pro 14"', spec: 'Apple M3 · 16GB · 512GB', price: 1290000, originalPrice: 1890000, grade: 'S급', category: '노트북', badge: 'BEST', rating: 4.9, reviewCount: 24, categoryId: 'notebook' },
  { id: 2, name: 'iPhone 15 Pro', spec: '256GB · 내츄럴 티타늄', price: 920000, originalPrice: 1350000, grade: '3급', category: '스마트폰', badge: 'NEW', rating: 4.8, reviewCount: 13, categoryId: 'smartphone' },
  { id: 3, name: 'iPad Pro 12.9"', spec: '256GB · Wi-Fi · 스페이스그레이', price: 780000, originalPrice: 1100000, grade: 'A급', category: '태블릿', badge: null, rating: 4.7, reviewCount: 8, categoryId: 'tablet' },
  { id: 4, name: 'Sony WH-1000XM5', spec: '노이즈캔슬링 · 블랙', price: 195000, originalPrice: 420000, grade: 'A급', category: '오디오', badge: 'SALE', rating: 4.8, reviewCount: 31, categoryId: 'audio' },
  { id: 5, name: 'LG 27GP850-B', spec: '27인치 · IPS · 144Hz · 1ms', price: 340000, originalPrice: 580000, grade: 'A급', category: '모니터', badge: null, rating: 4.5, reviewCount: 19, categoryId: 'monitor' },
  { id: 6, name: 'DJI Mini 4 Pro', spec: '4K60fps · 34분 비행 · RC-N2 포함', price: 650000, originalPrice: 980000, grade: '3급', category: '카메라/영상', badge: 'NEW', rating: 4.9, reviewCount: 22, categoryId: 'camera' },
  { id: 7, name: 'Samsung Galaxy Tab S9+', spec: '256GB · Wi-Fi · 그라파이트', price: 520000, originalPrice: 890000, grade: 'A급', category: '태블릿', badge: null, rating: 4.6, reviewCount: 17, categoryId: 'tablet' },
  { id: 8, name: 'Apple Watch Ultra 2', spec: '49mm · 티타늄 · GPS+셀룰러', price: 670000, originalPrice: 1190000, grade: 'A급', category: '웨어러블', badge: null, rating: 4.7, reviewCount: 11, categoryId: 'wearable' },
  { id: 9, name: 'HHKB Professional Hybrid Type-S', spec: '영문 배열 · 묵음', price: 185000, originalPrice: 340000, grade: 'A급', category: '주변기기', badge: null, rating: 4.5, reviewCount: 9, categoryId: 'accessory' },
  { id: 10, name: 'Logitech MX Master 3S', spec: '무선 · 8000DPI · 그래파이트', price: 68000, originalPrice: 130000, grade: 'A급', category: '주변기기', badge: null, rating: 4.8, reviewCount: 44, categoryId: 'accessory' },
  { id: 11, name: 'MacBook Air 15"', spec: 'Apple M2 · 8GB · 256GB · 스타라이트', price: 1120000, originalPrice: 1690000, grade: 'A급', category: '노트북', badge: null, rating: 4.7, reviewCount: 18, categoryId: 'notebook' },
  { id: 12, name: 'Samsung Galaxy S24 Ultra', spec: '256GB · 티타늄 블랙', price: 870000, originalPrice: 1460000, grade: 'A급', category: '스마트폰', badge: 'SALE', rating: 4.6, reviewCount: 27, categoryId: 'smartphone' },
]

export const ProductListPage = () => {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [sort, setSort] = useState(searchParams.get('sort') || 'latest')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handlePriceChange = (type, value) => {
    if (type === 'min') setMinPrice(value)
    else setMaxPrice(value)
  }

  const searchQuery = searchParams.get('search') || ''

  const filtered = useMemo(() => {
    let result = [...MOCK_PRODUCTS]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.spec.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    if (category !== 'all') {
      result = result.filter((p) => p.categoryId === category)
    }
    if (minPrice) {
      result = result.filter((p) => p.price >= Number(minPrice))
    }
    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice))
    }

    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [category, sort, minPrice, maxPrice, searchQuery])

  return (
    <div className="product-list-page">
      <div className="product-list-page__header">
        <div className="product-list-page__header-inner">
          <h1>{searchQuery ? `"${searchQuery}" 검색 결과` : '상품 목록'}</h1>
        </div>
      </div>
      <FilterBar
        category={category}
        sort={sort}
        minPrice={minPrice}
        maxPrice={maxPrice}
        totalCount={filtered.length}
        onCategoryChange={setCategory}
        onSortChange={setSort}
        onPriceChange={handlePriceChange}
      />
      <div className="product-list-page__content">
        <ProductGrid products={filtered} />
      </div>
    </div>
  )
}
