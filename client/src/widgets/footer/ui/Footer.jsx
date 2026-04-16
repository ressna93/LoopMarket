import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">LoopMarket</span>
          <p className="footer__desc">
            검증된 중고 IT 기기를 합리적인 가격으로. 모든 제품은 직접 테스트 후
            등급을 부여합니다.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="github">
              GitHub
            </a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>쇼핑</h4>
            <ul>
              <li>
                <Link to="/products">전체 상품</Link>
              </li>
              <li>
                <Link to="/products?category=notebook">노트북</Link>
              </li>
              <li>
                <Link to="/products?category=smartphone">스마트폰</Link>
              </li>
              <li>
                <Link to="/products?category=tablet">태블릿</Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>고객지원</h4>
            <ul>
              <li>
                <Link to="/my-page">마이페이지</Link>
              </li>
              <li>
                <Link to="/cart">장바구니</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <a href="mailto:hello@loopmarket.kr">hello@loopmarket.kr</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 LoopMarket. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">개인정보처리방침</a>
          <a href="#">이용약관</a>
        </div>
      </div>
    </footer>
  );
};
