import { ArrowUpRight, ShoppingBag } from 'lucide-react'

function ShopHeader({ cartCount, currentPage, onOpenCart, onOpenShop }) {
  return (
    <header className="shop-header">
      <div className="shop-header-inner">
        <button className="shop-brand" type="button" onClick={onOpenShop} aria-label="NitehTestShop home">
          <img className="shop-brand-mark" src="/nitehtestshop-mark.svg" alt="" />
          <span className="shop-brand-name">NitehTestShop<span>EVERYDAY ELECTRONICS</span></span>
        </button>

        <nav className="shop-nav" aria-label="Main navigation">
          <button
            className={currentPage === 'shop' ? 'shop-nav-link is-active' : 'shop-nav-link'}
            type="button"
            onClick={onOpenShop}
          >
            Shop all
          </button>
          <span className="shop-nav-note">Thoughtful tech, made simple.</span>
        </nav>

        <button
          className={currentPage === 'cart' ? 'shop-cart-button is-active' : 'shop-cart-button'}
          type="button"
          onClick={onOpenCart}
          aria-label={`View cart, ${cartCount} items`}
        >
          <ShoppingBag size={18} strokeWidth={1.8} />
          <span>Cart</span>
          <span className="shop-cart-count">{cartCount}</span>
          <ArrowUpRight className="shop-cart-arrow" size={15} />
        </button>
      </div>
    </header>
  )
}

export default ShopHeader
