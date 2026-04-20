import './OrderHistory.css'

const MOCK_ORDERS = [
  {
    id: 'ORD-382910',
    date: '2024.03.15',
    status: '배송완료',
    items: [{ name: 'MacBook Pro 14"', spec: 'Apple M3 · 16GB · 512GB', price: 1290000, grade: 'S급' }],
    totalPrice: 1293000,
  },
  {
    id: 'ORD-291847',
    date: '2024.02.28',
    status: '배송완료',
    items: [
      { name: 'Sony WH-1000XM5', spec: '노이즈캔슬링 · 블랙', price: 195000, grade: 'A급' },
      { name: 'Logitech MX Master 3S', spec: '무선 · 그래파이트', price: 68000, grade: 'A급' },
    ],
    totalPrice: 266000,
  },
  {
    id: 'ORD-183726',
    date: '2024.02.10',
    status: '배송중',
    items: [{ name: 'iPhone 15 Pro', spec: '256GB · 내츄럴 티타늄', price: 920000, grade: '3급' }],
    totalPrice: 923000,
  },
]

const STATUS_CLASS = {
  '배송완료': 'status--done',
  '배송중': 'status--shipping',
  '주문확인': 'status--pending',
}

export const OrderHistory = () => {
  return (
    <div className="order-history">
      <h2>주문 내역</h2>
      {MOCK_ORDERS.length === 0 ? (
        <p className="order-history__empty">주문 내역이 없습니다.</p>
      ) : (
        <div className="order-history__list">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-item__header">
                <div>
                  <span className="order-item__id">{order.id}</span>
                  <span className="order-item__date">{order.date}</span>
                </div>
                <span className={`order-item__status ${STATUS_CLASS[order.status]}`}>
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
