import { useNavigate } from 'react-router-dom'
import './FeaturedProducts.css'

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'MacBook Pro 14"',
    spec: 'Apple M3 · 16GB · 512GB',
    price: 1290000,
    originalPrice: 1890000,
    grade: 'S급',
    category: '노트북',
    badge: 'BEST',
    rating: 4.9,
    reviewCount: 24,
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    spec: '256GB · 내츄럴 티타늄',
    price: 920000,
    originalPrice: 1350000,
    grade: '3급',
    category: '스마트폰',
    badge: 'NEW',
    rating: 4.8,
    reviewCount: 13,
  },
  {
    id: 3,
    name: 'iPad Pro 12.9"',
    spec: '256GB · Wi-Fi · 스페이스그레이',
    price: 780000,
    originalPrice: 1100000,
    grade: 'A급',
    category: '태블릿',
    badge: null,
    rating: 4.7,
    reviewCount: 8,
  },
  {
    id: 4,
    name: 'Sony WH-1000XM5',
    spec: '노이즈캔슬링 · 블랙',
    price: 195000,
    originalPrice: 420000,
    grade: 'A급',
    category: '오디오',
    badge: 'SALE',
    rating: 4.8,
    reviewCount: 31,
  },
]

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

export const FeaturedProducts = () => {
  const navigate = useNavigate()

  return (
    <section className="featured">
      <div className="featured__inner">
        <div className="featured__header">
          <h2 className="featured__title">추천 상품</h2>
          <button className="featured__more" onClick={() => navigate('/products')}>
            전체보기 →
          </button>
        </div>
        <div className="featured__grid">
          {MOCK_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="product-card__image-wrap">
                <div className="product-card__image" />
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
                onClick={(e) => {
                  e.stopPropagation()
                }}
                aria-label="장바구니 담기"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
