import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../../../features/cart'
import { CartItem } from './CartItem'
import './CartPage.css'

export const CartPage = () => {
  const navigate = useNavigate()
  const { items, getTotalPrice, clearCart } = useCartStore()

  const totalPrice = getTotalPrice()
  const deliveryFee = totalPrice > 0 ? 3000 : 0
  const finalPrice = totalPrice + deliveryFee

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-page__inner">
          <h1 className="cart-page__title">장바구니</h1>
          <div className="cart-page__empty">
            <p>장바구니가 비어있습니다.</p>
            <button onClick={() => navigate('/products')}>쇼핑 계속하기</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-page__inner">
        <h1 className="cart-page__title">장바구니</h1>
        <div className="cart-page__content">
          <div className="cart-page__items">
            <div className="cart-page__items-header">
              <span>총 {items.length}개 상품</span>
              <button className="cart-page__clear" onClick={clearCart}>
                전체 삭제
              </button>
            </div>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-page__summary">
            <h2>주문 요약</h2>
            <div className="cart-page__summary-row">
              <span>상품 금액</span>
              <span>₩{totalPrice.toLocaleString()}</span>
            </div>
            <div className="cart-page__summary-row">
              <span>배송비</span>
              <span>{deliveryFee > 0 ? `₩${deliveryFee.toLocaleString()}` : '무료'}</span>
            </div>
            <div className="cart-page__summary-total">
              <span>총 결제금액</span>
              <span>₩{finalPrice.toLocaleString()}</span>
            </div>
            <button
              className="cart-page__checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              주문하기
            </button>
            <button
              className="cart-page__continue-btn"
              onClick={() => navigate('/products')}
            >
              쇼핑 계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
