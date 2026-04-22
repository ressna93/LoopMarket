import { useNavigate } from 'react-router-dom'
import { useRecentViewedStore } from '../../../features/recent-viewed'
import './RecentViewedSection.css'

export const RecentViewedSection = () => {
  const navigate = useNavigate()
  const { items, clearItems } = useRecentViewedStore()

  if (items.length === 0) return null

  return (
    <section className="recent-viewed">
      <div className="recent-viewed__inner">
        <div className="recent-viewed__header">
          <h2 className="recent-viewed__title">최근 본 상품</h2>
          <button className="recent-viewed__clear" onClick={clearItems}>
            전체 삭제
          </button>
        </div>
        <div className="recent-viewed__list">
          {items.slice(0, 6).map((product) => (
            <button
              key={product.id}
              className="recent-viewed__item"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {product.image ? (
                <img className="recent-viewed__image" src={product.image} alt={product.name} loading="lazy" />
              ) : (
                <div className="recent-viewed__image" />
              )}
              <p className="recent-viewed__name">{product.name}</p>
              <p className="recent-viewed__price">₩{product.price.toLocaleString()}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
