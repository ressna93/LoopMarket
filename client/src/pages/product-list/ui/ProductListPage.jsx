import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productsApi } from '../../../shared/api/productsApi'
import { FilterBar } from './FilterBar'
import { ProductGrid } from './ProductGrid'
import './ProductListPage.css'

export const ProductListPage = () => {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [sort, setSort] = useState(searchParams.get('sort') || 'latest')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const searchQuery = searchParams.get('search') || ''

  const handlePriceChange = (type, value) => {
    if (type === 'min') setMinPrice(value)
    else setMaxPrice(value)
  }

  useEffect(() => {
    setLoading(true)
    productsApi
      .getAll({
        search: searchQuery || undefined,
        category: category !== 'all' ? category : undefined,
        sort: sort !== 'latest' ? sort : undefined,
        minPrice: minPrice || undefined,
        maxPrice: maxPrice || undefined,
      })
      .then((data) => setProducts(data.products))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [searchQuery, category, sort, minPrice, maxPrice])

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
        totalCount={products.length}
        onCategoryChange={setCategory}
        onSortChange={setSort}
        onPriceChange={handlePriceChange}
      />
      <div className="product-list-page__content">
        {loading ? (
          <div className="product-list-page__loading">불러오는 중...</div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  )
}
