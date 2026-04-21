import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchModal.css'

const MOCK_PRODUCTS = [
  { id: 1, name: 'MacBook Pro 14"', spec: 'Apple M3 · 16GB · 512GB', price: 1290000, category: '노트북' },
  { id: 2, name: 'iPhone 15 Pro', spec: '256GB · 내츄럴 티타늄', price: 920000, category: '스마트폰' },
  { id: 3, name: 'iPad Pro 12.9"', spec: '256GB · Wi-Fi · 스페이스그레이', price: 780000, category: '태블릿' },
  { id: 4, name: 'Sony WH-1000XM5', spec: '노이즈캔슬링 · 블랙', price: 195000, category: '오디오' },
  { id: 5, name: 'LG 27GP850-B', spec: '27인치 · IPS · 144Hz', price: 340000, category: '모니터' },
  { id: 6, name: 'DJI Mini 4 Pro', spec: '4K60fps · 34분 비행', price: 650000, category: '카메라/영상' },
  { id: 7, name: 'Samsung Galaxy Tab S9+', spec: '256GB · Wi-Fi', price: 520000, category: '태블릿' },
  { id: 8, name: 'Apple Watch Ultra 2', spec: '49mm · 티타늄', price: 670000, category: '웨어러블' },
  { id: 9, name: 'HHKB Professional Hybrid Type-S', spec: '영문 배열 · 묵음', price: 185000, category: '주변기기' },
  { id: 10, name: 'Logitech MX Master 3S', spec: '무선 · 8000DPI', price: 68000, category: '주변기기' },
  { id: 11, name: 'MacBook Air 15"', spec: 'Apple M2 · 8GB · 256GB', price: 1120000, category: '노트북' },
  { id: 12, name: 'Samsung Galaxy S24 Ultra', spec: '256GB · 티타늄 블랙', price: 870000, category: '스마트폰' },
]

export const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    setResults(
      MOCK_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.spec.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      ).slice(0, 6)
    )
  }, [query])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleSelect = (product) => {
    navigate(`/products/${product.id}`)
    onClose()
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/products?search=${encodeURIComponent(query)}`)
    onClose()
  }

  return (
    <div className="search-modal__overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <form className="search-modal__form" onSubmit={handleSearch}>
          <svg className="search-modal__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="브랜드, 제품명, 스펙으로 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-modal__input"
          />
          {query && (
            <button type="button" className="search-modal__clear" onClick={() => setQuery('')}>
              ✕
            </button>
          )}
        </form>

        {results.length > 0 && (
          <div className="search-modal__results">
            {results.map((product) => (
              <button
                key={product.id}
                className="search-modal__result-item"
                onClick={() => handleSelect(product)}
              >
                <div className="search-modal__result-image" />
                <div className="search-modal__result-info">
                  <p className="search-modal__result-name">{product.name}</p>
                  <p className="search-modal__result-spec">{product.spec}</p>
                </div>
                <div className="search-modal__result-right">
                  <span className="search-modal__result-category">{product.category}</span>
                  <span className="search-modal__result-price">₩{product.price.toLocaleString()}</span>
                </div>
              </button>
            ))}
            <button className="search-modal__all" onClick={handleSearch}>
              "{query}" 전체 검색 결과 보기 →
            </button>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="search-modal__empty">
            <p>"{query}" 에 대한 검색 결과가 없습니다.</p>
          </div>
        )}

        <div className="search-modal__footer">
          <span>ESC 로 닫기</span>
        </div>
      </div>
    </div>
  )
}
