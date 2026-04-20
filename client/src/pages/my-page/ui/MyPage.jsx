import { useState } from 'react'
import { OrderHistory } from './OrderHistory'
import { WishList } from './WishList'
import './MyPage.css'

const TABS = [
  { id: 'orders', label: '주문 내역' },
  { id: 'wishlist', label: '찜한 상품' },
]

const MOCK_USER = {
  name: '김루프',
  email: 'test@loopmarket.kr',
  joinDate: '2024.01.15',
  orderCount: 3,
  wishCount: 3,
}

export const MyPage = () => {
  const [activeTab, setActiveTab] = useState('orders')

  return (
    <div className="my-page">
      <div className="my-page__inner">
        <div className="my-page__profile">
          <div className="my-page__avatar">
            {MOCK_USER.name[0]}
          </div>
          <div className="my-page__user-info">
            <h1 className="my-page__name">{MOCK_USER.name}</h1>
            <p className="my-page__email">{MOCK_USER.email}</p>
            <p className="my-page__join">가입일 {MOCK_USER.joinDate}</p>
          </div>
          <div className="my-page__stats">
            <div className="my-page__stat">
              <span>{MOCK_USER.orderCount}</span>
              <span>주문</span>
            </div>
            <div className="my-page__stat">
              <span>{MOCK_USER.wishCount}</span>
              <span>찜</span>
            </div>
          </div>
        </div>

        <div className="my-page__tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`my-page__tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="my-page__content">
          {activeTab === 'orders' && <OrderHistory />}
          {activeTab === 'wishlist' && <WishList />}
        </div>
      </div>
    </div>
  )
}
