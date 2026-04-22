import { useState, useEffect } from 'react'
import { ordersApi } from '../../../shared/api/ordersApi'
import './OrderHistory.css'

const STATUS_CLASS = {
  '결제완료': 'status--pending',
  '배송중': 'status--shipping',
  '배송완료': 'status--done',
}

export const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ordersApi
      .getMyOrders()
      .then((data) => setOrders(data.orders))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="order-history__empty">불러오는 중...</p>

  return (
    <div className="order-history">
      <h2>주문 내역</h2>
      {orders.length === 0 ? (
        <p className="order-history__empty">주문 내역이 없습니다.</p>
      ) : (
        <div className="order-history__list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-item__header">
                <div>
                  <span className="order-item__id">#{order.id.slice(0, 8).toUpperCase()}</span>
                  <span className="order-item__date">
                    {new Date(order.createdAt).toLocaleDateString('ko-KR')}
                  </span>
                </div>
                <span className={`order-item__status ${STATUS_CLASS[order.status] || ''}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-item__products">
                {order.items.map((item, i) => (
                  <div key={i} className="order-item__product">
                    <div className="order-item__product-image" />
                    <div className="order-item__product-info">
                      <p className="order-item__product-name">{item.name}</p>
                      <p className="order-item__product-spec">{item.spec}</p>
                      <p className="order-item__product-grade">{item.grade}</p>
                    </div>
                    <span className="order-item__product-price">
                      ₩{item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="order-item__footer">
                <span>총 결제금액</span>
                <strong>₩{order.totalPrice.toLocaleString()}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
