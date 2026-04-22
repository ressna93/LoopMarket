import { useNavigate } from 'react-router-dom'
import './ProductGrid.css'

const BADGE_CLASS = {
  BEST: 'badge--best',
  NEW: 'badge--new',
  SALE: 'badge--sale',
}

const GRADE_CLASS = {
  'S급': 'grade--s',
  'A급': 'grade--a',
  '3급': 'grade--b',
}

export const ProductGrid = ({ products }) => {
  const navigate = useNavigate()

  if (products.length === 0) {
    return (
      <div className="product-grid__empty">
        <p>조건에 맞는 상품이 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <div className="product-card__image-wrap">
            <img
              className="product-card__image"
              src={product.image}
              alt={product.name}
              loading="lazy"
            />
            {product.badge && (
              <span className={`product-card__badge ${BADGE_CLASS[product.badge]}`}>
                {product.badge}
              </span>
            )}
            <span className={`product-card__grade ${GRADE_CLASS[product.grade]}`}>
              {product.grade}
            </span>
          </div>
          <div className="product-card__info">
            <span className="product-card__category">{product.category}</span>
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__spec">{product.spec}</p>
            <div className="product-card__rating">
              <span className="product-card__star">★</span>
              <span>{product.rating}</span>
              <span className="product-card__review-count">({product.reviewCount})</span>
            </div>
            <div className="product-card__price-wrap">
              <span className="product-card__price">
                ₩{product.price.toLocaleString()}
              </span>
              <span className="product-card__original-price">
                ₩{product.originalPrice.toLocaleString()}
              </span>
            </div>
          </div>
          <button
            className="product-card__cart-btn"
            onClick={(e) => e.stopPropagation()}
            aria-label="장바구니 담기"
          >
            +
          </button>
        </div>
      ))}
    </div>
  )
}
