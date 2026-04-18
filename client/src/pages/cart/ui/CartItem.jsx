import { useCartStore } from '../../../features/cart'
import './CartItem.css'

export const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="cart-item">
      <div className="cart-item__image" />
      <div className="cart-item__info">
        <span className="cart-item__category">{item.category}</span>
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__spec">{item.spec}</p>
        <span className="cart-item__grade">{item.grade}</span>
      </div>
      <div className="cart-item__quantity">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <div className="cart-item__price">
        ₩{(item.price * item.quantity).toLocaleString()}
      </div>
      <button
        className="cart-item__remove"
        onClick={() => removeItem(item.id)}
        aria-label="삭제"
      >
        ✕
      </button>
    </div>
  )
}
