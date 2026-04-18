import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('이메일과 비밀번호를 입력해주세요.')
      return
    }
    // Firebase Auth 연동 예정
    setError('')
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-page__hero">
        <div className="auth-page__hero-overlay" />
        <div className="auth-page__hero-content">
          <Link to="/" className="auth-page__logo">LoopMarket</Link>
          <h2 className="auth-page__hero-title">
            검증된 중고 IT 기기를<br />합리적인 가격에.
          </h2>
          <p className="auth-page__hero-desc">
            모든 제품은 직접 테스트 후 등급을 부여합니다.<br />
            신뢰할 수 있는 가격, LoopMarket.
          </p>
          <div className="auth-page__stats">
            <div className="auth-page__stat">
              <span>500+</span><span>판매 완료</span>
            </div>
            <div className="auth-page__stat">
              <span>98%</span><span>구매자 만족도</span>
            </div>
            <div className="auth-page__stat">
              <span>4.8</span><span>평균 평점</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-page__form-wrap">
        <div className="auth-page__form-inner">
          <div className="auth-page__tabs">
            <button className="auth-page__tab active">로그인</button>
            <Link to="/signup" className="auth-page__tab">회원가입</Link>
          </div>

          <h1 className="auth-page__title">다시 오셨군요!</h1>
          <p className="auth-page__subtitle">계정에 로그인하세요</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form__field">
              <label>이메일</label>
              <input
                type="email"
                name="email"
                placeholder="hello@loopmarket.kr"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="auth-form__field">
              <label>비밀번호</label>
              <input
                type="password"
                name="password"
                placeholder="········"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="auth-form__hint">
              <p>테스트 계정: test@loopmarket.kr / test1234</p>
              <p>관리자: admin@loopmarket.kr / admin1234</p>
            </div>

            {error && <p className="auth-form__error">{error}</p>}

            <button type="submit" className="auth-form__submit">로그인</button>
          </form>

          <p className="auth-page__switch">
            아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
