import { Plus } from 'lucide-react'

function ProductCard({ product, onAdd }) {
  return (
    <article className="shop-product-card">
      <div className={`shop-product-art art-${product.color}`}>
        <span className="shop-product-index">N° {String(product.id === 'laptop' ? 1 : product.id === 'mouse' ? 2 : product.id === 'keyboard' ? 3 : 4).padStart(2, '0')}</span>
        <img className="shop-product-image" src={`${import.meta.env.BASE_URL}products/${product.id}.png`} alt={product.name} />
      </div>
      <div className="shop-product-info">
        <div className="shop-product-copy">
          <p className="shop-product-category">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="shop-product-description">{product.description}</p>
        </div>
        <div className="shop-product-bottom">
          <span className="shop-product-price">${product.price.toFixed(2)}</span>
          <button className="shop-add-button" type="button" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>
            <Plus size={18} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
