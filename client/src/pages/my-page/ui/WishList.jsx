import { useNavigate } from 'react-router-dom'
import './WishList.css'

const MOCK_WISHED = [
  { id: 1, name: 'MacBook Pro 14"', spec: 'Apple M3 · 16GB · 512GB', price: 1290000, originalPrice: 1890000, grade: 'S급', category: '노트북' },
  { id: 4, name: 'Sony WH-1000XM5', spec: '노이즈캔슬링 · 블랙', price: 195000, originalPrice: 420000, grade: 'A급', category: '오디오' },
  { id: 8, name: 'Apple Watch Ultra 2', spec: '49mm · 티타늄 · GPS+셀룰러', price: 670000, originalPrice: 1190000, grade: 'A급', category: '웨어러블' },
]

export const WishList = () => {
  const navigate = useNavigate()

  return (
    <div className="wish-list">
      <h2>찜한 상품</h2>
      {MOCK_WISHED.length === 0 ? (
        <p className="wish-list__empty">찜한 상품이 없습니다.</p>
      ) : (
        <div className="wish-list__grid">
          {MOCK_WISHED.map((product) => (
            <div
              key={product.id}
              className="wish-card"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="wish-card__image" />
              <div className="wish-card__info">
                <span className="wish-card__category">{product.category}</span>
                <h3 className="wish-card__name">{product.name}</h3>
                <p className="wish-card__spec">{product.spec}</p>
                <div className="wish-card__price-wrap">
                  <span className="wish-card__price">₩{product.price.toLocaleString()}</span>
                  <span className="wish-card__original">₩{product.originalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
