import { useState } from 'react'
import './ProductInfo.css'

const GRADE_INFO = {
  'S급': { label: 'S급', desc: '미사용 또는 개봉만 한 상태. 스크래치 없음.' },
  'A급': { label: 'A급', desc: '사용감 거의 없음. 미세한 흔적 있을 수 있음.' },
  '3급': { label: '3급', desc: '사용감 있음. 기능 완전 정상.' },
}

export const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [isWished, setIsWished] = useState(false)

  const grade = GRADE_INFO[product.grade] || GRADE_INFO['A급']
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div className="product-info">
      <div className="product-info__badges">
        {product.badge && (
          <span className={`product-info__badge badge--${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <span className="product-info__category">{product.category}</span>
      </div>

      <h1 className="product-info__name">{product.name}</h1>
      <p className="product-info__spec">{product.spec}</p>

      <div className="product-info__rating">
        <span className="product-info__star">★</span>
        <span>{product.rating}</span>
        <span className="product-info__review-count">({product.reviewCount}개 리뷰)</span>
      </div>

      <div className="product-info__price-wrap">
        <span className="product-info__discount">{discount}%</span>
        <span className="product-info__price">₩{product.price.toLocaleString()}</span>
        <span className="product-info__original">₩{product.originalPrice.toLocaleString()}</span>
      </div>

      <div className="product-info__grade">
        <div className="product-info__grade-header">
          <span className="product-info__grade-label">등급</span>
          <span className="product-info__grade-value">{grade.label}</span>
        </div>
        <p className="product-info__grade-desc">{grade.desc}</p>
      </div>

      <div className="product-info__quantity">
        <span className="product-info__quantity-label">수량</span>
        <div className="product-info__quantity-ctrl">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
      </div>

      <div className="product-info__actions">
        <button className="product-info__cart-btn">장바구니 담기</button>
        <button className="product-info__buy-btn">바로 구매</button>
        <button
          className={`product-info__wish-btn ${isWished ? 'active' : ''}`}
          onClick={() => setIsWished((w) => !w)}
          aria-label="찜하기"
        >
          {isWished ? '♥' : '♡'}
        </button>
      </div>

      <div className="product-info__meta">
        <div className="product-info__meta-item">
          <span>배송</span>
          <span>3~5일 이내 출고</span>
        </div>
        <div className="product-info__meta-item">
          <span>환불</span>
          <span>7일 이내 환불 보장</span>
        </div>
      </div>
    </div>
  )
}
