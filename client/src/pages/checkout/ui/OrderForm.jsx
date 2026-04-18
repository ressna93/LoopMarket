import { useState } from 'react'
import './OrderForm.css'

const PAYMENT_METHODS = [
  { id: 'card', label: '신용/체크카드' },
  { id: 'kakao', label: '카카오페이' },
  { id: 'naver', label: '네이버페이' },
  { id: 'transfer', label: '무통장 입금' },
]

export const OrderForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    addressDetail: '',
    memo: '',
    paymentMethod: 'card',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.address) return
    onSubmit(form)
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div className="order-form__section">
        <h2>배송 정보</h2>
        <div className="order-form__field">
          <label>수령인</label>
          <input
            type="text"
            name="name"
            placeholder="홍길동"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="order-form__field">
          <label>연락처</label>
          <input
            type="tel"
            name="phone"
            placeholder="010-0000-0000"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="order-form__field">
          <label>주소</label>
          <input
            type="text"
            name="address"
            placeholder="서울특별시 강남구 테헤란로 123"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="order-form__field">
          <label>상세 주소</label>
          <input
            type="text"
            name="addressDetail"
            placeholder="101동 202호"
            value={form.addressDetail}
            onChange={handleChange}
          />
        </div>
        <div className="order-form__field">
          <label>배송 메모</label>
          <input
            type="text"
            name="memo"
            placeholder="문 앞에 놓아주세요"
            value={form.memo}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="order-form__section">
        <h2>결제 수단</h2>
        <div className="order-form__payment">
          {PAYMENT_METHODS.map((method) => (
            <label
              key={method.id}
              className={`order-form__payment-item ${form.paymentMethod === method.id ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={form.paymentMethod === method.id}
                onChange={handleChange}
              />
              {method.label}
            </label>
          ))}
        </div>
      </div>

      <div className="order-form__notice">
        <p>※ 이 결제는 테스트용입니다. 실제 결제가 이루어지지 않습니다.</p>
      </div>

      <button type="submit" className="order-form__submit">
        결제하기
      </button>
    </form>
  )
}
