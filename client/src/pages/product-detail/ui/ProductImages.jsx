import { useState } from 'react'
import './ProductImages.css'

export const ProductImages = ({ images = [] }) => {
  const [selected, setSelected] = useState(0)

  const displayImages = images.length > 0 ? images : [1, 2, 3, 4]

  return (
    <div className="product-images">
      <div className="product-images__main">
        <div className="product-images__main-img" />
      </div>
      <div className="product-images__thumbnails">
        {displayImages.map((_, i) => (
          <button
            key={i}
            className={`product-images__thumb ${selected === i ? 'active' : ''}`}
            onClick={() => setSelected(i)}
          >
            <div className="product-images__thumb-img" />
          </button>
        ))}
      </div>
    </div>
  )
}
