import { useState } from 'react'
import { ProductForm } from './ProductForm'
import './AdminPage.css'

const MOCK_PRODUCTS = [
  { id: 1, name: 'MacBook Pro 14"', category: '노트북', price: 1290000, grade: 'S급', badge: 'BEST' },
  { id: 2, name: 'iPhone 15 Pro', category: '스마트폰', price: 920000, grade: '3급', badge: 'NEW' },
  { id: 3, name: 'iPad Pro 12.9"', category: '태블릿', price: 780000, grade: 'A급', badge: null },
  { id: 4, name: 'Sony WH-1000XM5', category: '오디오', price: 195000, grade: 'A급', badge: 'SALE' },
]

export const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('list')
  const [products, setProducts] = useState(MOCK_PRODUCTS)

  const handleAddProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: Date.now() },
    ])
    setActiveTab('list')
  }

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="admin-page">
      <div className="admin-page__inner">
        <div className="admin-page__header">
          <h1>관리자 페이지</h1>
          <span className="admin-page__badge">ADMIN</span>
        </div>

        <div className="admin-page__stats">
          <div className="admin-stat">
            <span className="admin-stat__value">{products.length}</span>
            <span className="admin-stat__label">전체 상품</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat__value">3</span>
            <span className="admin-stat__label">오늘 주문</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat__value">₩2,985,000</span>
            <span className="admin-stat__label">오늘 매출</span>
          </div>
        </div>

        <div className="admin-page__tabs">
          <button
            className={`admin-page__tab ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            상품 목록
          </button>
          <button
            className={`admin-page__tab ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            + 상품 등록
          </button>
        </div>

        {activeTab === 'list' && (
          <div className="admin-page__table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>상품명</th>
                  <th>카테고리</th>
                  <th>가격</th>
                  <th>등급</th>
                  <th>배지</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td className="admin-table__name">{product.name}</td>
                    <td>{product.category}</td>
                    <td>₩{product.price.toLocaleString()}</td>
                    <td>
                      <span className="admin-table__grade">{product.grade}</span>
                    </td>
                    <td>
                      {product.badge && (
                        <span className={`admin-table__badge badge--${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        className="admin-table__delete"
                        onClick={() => handleDelete(product.id)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="admin-page__form-wrap">
            <h2>새 상품 등록</h2>
            <ProductForm onSubmit={handleAddProduct} />
          </div>
        )}
      </div>
    </div>
  )
}
