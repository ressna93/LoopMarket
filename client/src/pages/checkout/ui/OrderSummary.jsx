import { useCartStore } from '../../../features/cart'
import './OrderSummary.css'

export const OrderSummary = () => {
  const { items, getTotalPrice } = useCartStore()
  const totalPrice = getTotalPrice()
  const deliveryFee = totalPrice > 0 ? 3000 : 0
  const finalPrice = totalPrice + deliveryFee

  return (
    <div className="order-summary">
      <h2>주문 상품</h2>
      <div className="order-summary__items">
        {items.map((item) => (
          <div key={item.id} className="order-summary__item">
            <div className="order-summary__item-image" />
            <div className="order-summary__item-info">
              <p className="order-summary__item-name">{item.name}</p>
              <p className="order-summary__item-spec">{item.spec}</p>
              <p className="order-summary__item-qty">수량 {item.quantity}개</p>
            </div>
            <span className="order-summary__item-price">
              ₩{(item.price * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <div className="order-summary__price">
        <div className="order-summary__row">
          <span>상품 금액</span>
          <span>₩{totalPrice.toLocaleString()}</span>
        </div>
        <div className="order-summary__row">
          <span>배송비</span>
          <span>{deliveryFee > 0 ? `₩${deliveryFee.toLocaleString()}` : '무료'}</span>
        </div>
        <div className="order-summary__total">
          <span>총 결제금액</span>
          <span>₩{finalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
