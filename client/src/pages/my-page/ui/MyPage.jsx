import { useState } from 'react'
import { useUserStore } from '../../../entities/user'
import { OrderHistory } from './OrderHistory'
import { WishList } from './WishList'
import './MyPage.css'

const TABS = [
  { id: 'orders', label: '주문 내역' },
  { id: 'wishlist', label: '찜한 상품' },
]

export const MyPage = () => {
  const [activeTab, setActiveTab] = useState('orders')
  const { user } = useUserStore()

  const displayName = user?.displayName || user?.email?.split('@')[0] || '사용자'
  const joinDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('ko-KR')
    : '-'

  return (
    <div className="my-page">
      <div className="my-page__inner">
        <div className="my-page__profile">
          <div className="my-page__avatar">
            {displayName[0].toUpperCase()}
          </div>
          <div className="my-page__user-info">
            <h1 className="my-page__name">{displayName}</h1>
            <p className="my-page__email">{user?.email}</p>
            <p className="my-page__join">가입일 {joinDate}</p>
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
