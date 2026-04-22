import { useState } from 'react'
import './ProductImages.css'

export const ProductImages = ({ image, name }) => {
  const [selected, setSelected] = useState(0)

  const thumbSeeds = ['main', 'angle2', 'angle3', 'detail']
  const baseUrl = image?.replace('/600/450', '') || ''

  const images = image
    ? [
        image,
        `${baseUrl}/600/450?v=2`,
        `${baseUrl}/600/450?v=3`,
        `${baseUrl}/600/450?v=4`,
      ]
    : []

  return (
    <div className="product-images">
      <div className="product-images__main">
        {image ? (
          <img
            className="product-images__main-img"
            src={images[selected]}
            alt={name}
          />
        ) : (
          <div className="product-images__main-img" />
        )}
      </div>
      <div className="product-images__thumbnails">
        {(image ? images : [1, 2, 3, 4]).map((src, i) => (
          <button
            key={i}
            className={`product-images__thumb ${selected === i ? 'active' : ''}`}
            onClick={() => setSelected(i)}
          >
            {image ? (
              <img className="product-images__thumb-img" src={src} alt={`${name} ${i + 1}`} />
            ) : (
              <div className="product-images__thumb-img" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
