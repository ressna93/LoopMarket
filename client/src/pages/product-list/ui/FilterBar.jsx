import './FilterBar.css'

const CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'notebook', label: '노트북' },
  { id: 'smartphone', label: '스마트폰' },
  { id: 'tablet', label: '태블릿' },
  { id: 'audio', label: '오디오' },
  { id: 'monitor', label: '모니터' },
  { id: 'camera', label: '카메라/영상' },
  { id: 'wearable', label: '웨어러블' },
  { id: 'accessory', label: '주변기기' },
]

const SORT_OPTIONS = [
  { value: 'latest', label: '최신 정렬' },
  { value: 'price_asc', label: '낮은 가격순' },
  { value: 'price_desc', label: '높은 가격순' },
  { value: 'rating', label: '평점순' },
]

export const FilterBar = ({ category, sort, minPrice, maxPrice, onCategoryChange, onSortChange, onPriceChange, totalCount }) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-bar__cat-btn ${category === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="filter-bar__options">
        <div className="filter-bar__price">
          <input
            type="number"
            placeholder="최소 가격"
            value={minPrice}
            onChange={(e) => onPriceChange('min', e.target.value)}
            className="filter-bar__price-input"
          />
          <span>~</span>
          <input
            type="number"
            placeholder="최대 가격"
            value={maxPrice}
            onChange={(e) => onPriceChange('max', e.target.value)}
            className="filter-bar__price-input"
          />
        </div>

        <select
          className="filter-bar__sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-bar__count">
        총 <strong>{totalCount}</strong>개의 상품
      </div>
    </div>
  )
}
