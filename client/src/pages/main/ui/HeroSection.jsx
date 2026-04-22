import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

export const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__badge">지금 구매 가능한 상품 12+</span>
          <h1 className="hero__title">
            검증된 중고<br />
            <em>IT 기기</em> 마켓
          </h1>
          <p className="hero__desc">
            직접 테스트하고 등급을 부여한 중고 IT 기기.<br />
            합리적인 가격에 프리미엄 기기를 경험하세요.
          </p>
          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => navigate('/products')}
            >
              상품 둘러보기 →
            </button>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={() => navigate('/products?sort=best')}
            >
              베스트 상품
            </button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">500+</span>
              <span className="hero__stat-label">판매 완료</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">98%</span>
              <span className="hero__stat-label">구매자 만족도</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">7일</span>
              <span className="hero__stat-label">환불 보장</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="https://picsum.photos/seed/macbookpro14/800/600"
              alt="MacBook Pro"
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
