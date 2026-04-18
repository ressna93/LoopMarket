import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../../../features/cart'
import { OrderForm } from './OrderForm'
import { OrderSummary } from './OrderSummary'
import './CheckoutPage.css'

export const CheckoutPage = () => {
  const navigate = useNavigate()
  const { items, clearCart } = useCartStore()
  const [isComplete, setIsComplete] = useState(false)
  const [orderNumber] = useState(() => Math.floor(Math.random() * 900000) + 100000)

  if (items.length === 0 && !isComplete) {
    return (
      <div className="checkout-page">
        <div className="checkout-page__inner">
          <div className="checkout-page__empty">
            <p>장바구니가 비어있습니다.</p>
            <button onClick={() => navigate('/products')}>쇼핑하러 가기</button>
          </div>
        </div>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="checkout-page">
        <div className="checkout-page__inner">
          <div className="checkout-page__complete">
            <div className="checkout-page__complete-icon">✓</div>
            <h1>주문이 완료되었습니다!</h1>
            <p>주문번호: <strong>#{orderNumber}</strong></p>
            <p className="checkout-page__complete-desc">
              3~5일 이내에 배송될 예정입니다.<br />
              마이페이지에서 주문 현황을 확인하세요.
            </p>
            <div className="checkout-page__complete-actions">
              <button onClick={() => navigate('/my-page')}>주문 내역 보기</button>
              <button onClick={() => navigate('/products')}>쇼핑 계속하기</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = () => {
    clearCart()
    setIsComplete(true)
  }

  return (
    <div className="checkout-page">
      <div className="checkout-page__inner">
        <h1 className="checkout-page__title">주문/결제</h1>
        <div className="checkout-page__content">
          <OrderForm onSubmit={handleSubmit} />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
