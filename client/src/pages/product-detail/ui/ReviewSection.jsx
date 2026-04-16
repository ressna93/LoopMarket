import { useState } from 'react'
import './ReviewSection.css'

const MOCK_REVIEWS = [
  { id: 1, author: '김*준', rating: 5, date: '2024.03.15', content: '상태가 사진보다 훨씬 좋아요. 포장도 꼼꼼하게 해주셔서 안전하게 받았습니다. 강추!', grade: 'A급' },
  { id: 2, author: '이*영', rating: 4, date: '2024.03.10', content: '설명한 등급대로 왔습니다. 배터리 상태도 양호하고 만족합니다.', grade: 'A급' },
  { id: 3, author: '박*현', rating: 5, date: '2024.02.28', content: '중고라고 믿기 어려울 정도로 깨끗해요. 재구매 의사 있습니다.', grade: 'S급' },
]

export const ReviewSection = ({ rating, reviewCount }) => {
  const [content, setContent] = useState('')
  const [myRating, setMyRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <section className="review-section">
      <div className="review-section__header">
        <h2>리뷰</h2>
        <div className="review-section__summary">
          <span className="review-section__avg">★ {rating}</span>
          <span className="review-section__count">({reviewCount}개)</span>
        </div>
      </div>

      <div className="review-section__list">
        {MOCK_REVIEWS.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-item__header">
              <span className="review-item__author">{review.author}</span>
              <span className="review-item__stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </span>
              <span className="review-item__date">{review.date}</span>
            </div>
            <p className="review-item__content">{review.content}</p>
          </div>
        ))}
      </div>

      <div className="review-section__write">
        <h3>리뷰 작성</h3>
        <div className="review-section__stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`review-section__star ${star <= (hoverRating || myRating) ? 'active' : ''}`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setMyRating(star)}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          className="review-section__textarea"
          placeholder="상품에 대한 솔직한 리뷰를 남겨주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
        <button className="review-section__submit">리뷰 등록</button>
      </div>
    </section>
  )
}
