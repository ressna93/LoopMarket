import { useState } from 'react'
import './ProductForm.css'

const CATEGORIES = [
  { id: 'notebook', label: '노트북' },
  { id: 'smartphone', label: '스마트폰' },
  { id: 'tablet', label: '태블릿' },
  { id: 'audio', label: '오디오' },
  { id: 'monitor', label: '모니터' },
  { id: 'camera', label: '카메라/영상' },
  { id: 'wearable', label: '웨어러블' },
  { id: 'accessory', label: '주변기기' },
]

const GRADES = ['S급', 'A급', '3급']
const BADGES = ['없음', 'NEW', 'BEST', 'SALE']

const INITIAL_FORM = {
  name: '',
  spec: '',
  price: '',
  originalPrice: '',
  categoryId: 'notebook',
  grade: 'A급',
  badge: '없음',
  description: '',
}

export const ProductForm = ({ onSubmit }) => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.price || !form.originalPrice) return
    onSubmit({
      ...form,
      price: Number(form.price),
      originalPrice: Number(form.originalPrice),
      badge: form.badge === '없음' ? null : form.badge,
    })
    setForm(INITIAL_FORM)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="product-form__success">
          ✓ 상품이 등록되었습니다.
        </div>
      )}

      <div className="product-form__grid">
        <div className="product-form__field product-form__field--full">
          <label>상품명 *</label>
          <input
            type="text"
            name="name"
            placeholder="MacBook Pro 14&quot;"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="product-form__field product-form__field--full">
          <label>스펙</label>
          <input
            type="text"
            name="spec"
            placeholder="Apple M3 · 16GB · 512GB"
            value={form.spec}
            onChange={handleChange}
          />
        </div>

        <div className="product-form__field">
          <label>판매 가격 (원) *</label>
          <input
            type="number"
            name="price"
            placeholder="1290000"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="product-form__field">
          <label>원래 가격 (원) *</label>
          <input
            type="number"
            name="originalPrice"
            placeholder="1890000"
            value={form.originalPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="product-form__field">
          <label>카테고리</label>
          <select name="categoryId" value={form.categoryId} onChange={handleChange}>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>

        <div className="product-form__field">
          <label>등급</label>
          <select name="grade" value={form.grade} onChange={handleChange}>
            {GRADES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className="product-form__field">
          <label>배지</label>
          <select name="badge" value={form.badge} onChange={handleChange}>
            {BADGES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="product-form__field product-form__field--full">
          <label>상품 설명</label>
          <textarea
            name="description"
            placeholder="상품에 대한 자세한 설명을 입력해주세요."
            value={form.description}
            onChange={handleChange}
            rows={4}
          />
        </div>
      </div>

      <button type="submit" className="product-form__submit">
        상품 등록
      </button>
    </form>
  )
}
