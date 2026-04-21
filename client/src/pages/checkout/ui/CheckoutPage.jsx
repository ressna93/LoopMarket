import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../../../features/cart'
import { ordersApi } from '../../../shared/api/ordersApi'
import { OrderForm } from './OrderForm'
import { OrderSummary } from './OrderSummary'
import './CheckoutPage.css'

export const CheckoutPage = () => {
  const navigate = useNavigate()
  const { items, clearCart, getTotalPrice } = useCartStore()
  const [isComplete, setIsComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

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
            {orderId && <p>주문번호: <strong>#{orderId.slice(0, 8).toUpperCase()}</strong></p>}
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

  const handleSubmit = async (shippingInfo) => {
    setLoading(true)
    try {
      const data = await ordersApi.create({
        items,
        shippingInfo,
        totalPrice: getTotalPrice(),
      })
      setOrderId(data.orderId)
      clearCart()
      setIsComplete(true)
    } catch (err) {
      console.error(err)
      alert('주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checkout-page">
      <div className="checkout-page__inner">
        <h1 className="checkout-page__title">주문/결제</h1>
        <div className="checkout-page__content">
          <OrderForm onSubmit={handleSubmit} loading={loading} />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}
