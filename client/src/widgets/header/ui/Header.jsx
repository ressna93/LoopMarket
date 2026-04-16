import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
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
          <button className="header__icon-btn" aria-label="검색">
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
          <button
            className="header__login-btn"
            onClick={() => navigate("/login")}
          >
            로그인
          </button>
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
  );
};
