import { useNavigate } from 'react-router-dom'
import './CategorySection.css'

const CATEGORIES = [
  { id: 'all', label: '전체', icon: '🛍️' },
  { id: 'notebook', label: '노트북', icon: '💻' },
  { id: 'smartphone', label: '스마트폰', icon: '📱' },
  { id: 'tablet', label: '태블릿', icon: '📲' },
  { id: 'audio', label: '오디오', icon: '🎧' },
  { id: 'monitor', label: '모니터', icon: '🖥️' },
  { id: 'camera', label: '카메라/영상', icon: '📷' },
  { id: 'wearable', label: '웨어러블', icon: '⌚' },
  { id: 'accessory', label: '주변기기', icon: '🖱️' },
]

export const CategorySection = () => {
  const navigate = useNavigate()

  return (
    <section className="category">
      <div className="category__inner">
        <h2 className="category__title">카테고리</h2>
        <div className="category__grid">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className="category__item"
              onClick={() => navigate(`/products?category=${cat.id}`)}
            >
              <span className="category__icon">{cat.icon}</span>
              <span className="category__label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
