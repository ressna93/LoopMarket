import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../entities/user'
import { SearchModal } from '../../../features/search-filter'
import { useThemeStore } from '../../../features/theme'
import './Header.css'

export const Header = () => {
  const navigate = useNavigate()
  const { user, logout } = useUserStore()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isDark, toggle } = useThemeStore()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <>
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          LoopMarket
        </Link>

        <nav className="header__nav">
          <Link to="/products">상품 목록</Link>
          <Link to="/products?tab=event">이벤트</Link>
        </nav>

        <div className="header__actions">
          <button className="header__icon-btn" aria-label="테마 전환" onClick={toggle}>
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button className="header__icon-btn" aria-label="검색" onClick={() => setIsSearchOpen(true)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button
            className="header__icon-btn"
            aria-label="장바구니"
            onClick={() => navigate("/cart")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
          {user ? (
            <div className="header__user">
              <button className="header__user-btn" onClick={() => navigate('/my-page')}>
                {user.displayName || user.email.split('@')[0]}
              </button>
              <button className="header__logout-btn" onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          ) : (
            <button className="header__login-btn" onClick={() => navigate('/login')}>
              로그인
            </button>
          )}
        </div>

        <button className="header__hamburger" aria-label="메뉴">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
    {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};
