import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { productsApi } from '../../../shared/api/productsApi'
import { useRecentViewedStore } from '../../../features/recent-viewed'
import { ProductImages } from './ProductImages'
import { ProductInfo } from './ProductInfo'
import { ReviewSection } from './ReviewSection'
import './ProductDetailPage.css'

export const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const addItem = useRecentViewedStore((state) => state.addItem)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setLoading(true)
    productsApi
      .getById(id)
      .then((data) => {
        setProduct(data)
        addItem(data)
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="product-detail-page__loading">불러오는 중...</div>
  }

  if (notFound || !product) {
    return (
      <div className="product-detail-page__not-found">
        <p>상품을 찾을 수 없습니다.</p>
        <button onClick={() => navigate('/products')}>목록으로 돌아가기</button>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-page__inner">
        <button className="product-detail-page__back" onClick={() => navigate(-1)}>
          ← 뒤로가기
        </button>
        <div className="product-detail-page__content">
          <ProductImages image={product.image} name={product.name} />
          <ProductInfo product={product} />
        </div>
        <ReviewSection rating={product.rating} reviewCount={product.reviewCount} />
      </div>
    </div>
  )
}
