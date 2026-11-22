import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Trash2,
} from 'lucide-react'
import ShopHeader from './components/ShopHeader.jsx'
import ProductCard from './components/ProductCard.jsx'
import OrderSummary from './components/OrderSummary.jsx'
import { products } from './products.js'
import './shop.css'

const shippingOptions = {
  standard: { label: 'Standard shipping', detail: '3–5 business days', price: 0 },
  express: { label: 'Express shipping', detail: '1–2 business days', price: 9 },
}

const emptyCustomer = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
}

function ShopApp() {
  const [page, setPage] = useState('shop')
  const [cart, setCart] = useState({})
  const [customer, setCustomer] = useState(emptyCustomer)
  const [shippingMethod, setShippingMethod] = useState('standard')
  const [order, setOrder] = useState(null)
  const [nextOrderNumber, setNextOrderNumber] = useState(1)
  const [announcement, setAnnouncement] = useState('')

  const cartItems = useMemo(
    () => products
      .filter(product => cart[product.id])
      .map(product => ({ ...product, quantity: cart[product.id] })),
    [cart],
  )
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
  const subtotal = cartItems.reduce((amount, item) => amount + item.price * item.quantity, 0)
  const shipping = shippingOptions[shippingMethod].price

  function addToCart(product) {
    setCart(current => ({ ...current, [product.id]: (current[product.id] ?? 0) + 1 }))
    setAnnouncement(`${product.name} added to your cart.`)
  }

  function updateQuantity(productId, quantity) {
    setCart(current => ({ ...current, [productId]: Math.max(1, quantity) }))
  }

  function removeFromCart(product) {
    setCart(current => {
      const updated = { ...current }
      delete updated[product.id]
      return updated
    })
    setAnnouncement(`${product.name} removed from your cart.`)
  }

  function handleCustomerChange(event) {
    const { name, value } = event.target
    setCustomer(current => ({ ...current, [name]: value }))
  }

  function placeOrder(event) {
    event.preventDefault()
    if (cartItems.length === 0) {
      setPage('shop')
      return
    }

    setOrder({
      id: `ORD-${String(nextOrderNumber).padStart(4, '0')}`,
      customer: { ...customer },
      items: cartItems.map(item => ({ ...item })),
      subtotal,
      shipping,
      total: subtotal + shipping,
      shippingMethod,
      date: new Date().toISOString(),
    })
    setNextOrderNumber(number => number + 1)
    setCart({})
    setPage('confirmation')
  }

  return (
    <div className="shop-app">
      <div className="shop-announcement">A little more thoughtful. A lot more useful. <span>Free standard shipping on every order.</span></div>
      <ShopHeader
        cartCount={cartCount}
        currentPage={page === 'cart' ? 'cart' : page}
        onOpenCart={() => setPage('cart')}
        onOpenShop={() => setPage('shop')}
      />
      <main>
        {page === 'shop' && (
          <ShopPage products={products} onAdd={addToCart} announcement={announcement} />
        )}
        {page === 'cart' && (
          <CartPage
            items={cartItems}
            subtotal={subtotal}
            onContinueShopping={() => setPage('shop')}
            onCheckout={() => setPage('checkout')}
            onQuantityChange={updateQuantity}
            onRemove={removeFromCart}
          />
        )}
        {page === 'checkout' && (
          <CheckoutPage
            customer={customer}
            items={cartItems}
            shippingMethod={shippingMethod}
            subtotal={subtotal}
            onBack={() => setPage('cart')}
            onCustomerChange={handleCustomerChange}
            onPlaceOrder={placeOrder}
            onShippingChange={setShippingMethod}
          />
        )}
        {page === 'confirmation' && order && (
          <ConfirmationPage order={order} onContinueShopping={() => setPage('shop')} />
        )}
      </main>
      <footer className="shop-footer">
        <span className="shop-footer-brand">
          <img className="shop-footer-mark" src="/nitehtestshop-mark.svg" alt="" />
          <span className="shop-footer-brand-copy">NitehTestShop<span className="shop-footer-goods">EVERYDAY ELECTRONICS</span></span>
        </span>
        <span>Made for everyday, chosen to last.</span>
        <span>© {new Date().getFullYear()} NitehTestShop</span>
      </footer>
    </div>
  )
}

function ShopPage({ products: catalog, onAdd, announcement }) {
  return (
    <div className="shop-page shop-catalog">
      <section id="shop-products" className="shop-products-section">
        <div className="shop-section-heading">
          <div>
            <p className="shop-overline">FEWER, BETTER THINGS</p>
            <h2>Our essentials<span className="shop-heading-period">.</span></h2>
          </div>
          <p>Four everyday favorites.<br />Nothing you don't need.</p>
        </div>
        <div className="shop-products-grid">
          {catalog.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
        </div>
        <p className="shop-live-announcement" role="status" aria-live="polite">{announcement}</p>
      </section>
    </div>
  )
}

function CartPage({ items, subtotal, onContinueShopping, onCheckout, onQuantityChange, onRemove }) {
  return (
    <div className="shop-page shop-flow-page">
      <FlowHeading step="01" title="Your cart" description="The good things you picked out." />
      {items.length === 0 ? (
        <div className="shop-empty-state">
          <div className="shop-empty-icon"><PackageCheck size={30} strokeWidth={1.5} /></div>
          <h2>Your cart is taking a breather.</h2>
          <p>Find something useful for your everyday.</p>
          <button className="shop-button shop-button-dark" type="button" onClick={onContinueShopping}>Browse the collection <ArrowRight size={17} /></button>
        </div>
      ) : (
        <div className="shop-flow-layout">
          <section className="shop-cart-list" aria-label="Items in your cart">
            <div className="shop-list-label"><span>PRODUCT</span><span>QUANTITY</span><span>TOTAL</span></div>
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={onQuantityChange}
                onRemove={onRemove}
              />
            ))}
            <button className="shop-text-button" type="button" onClick={onContinueShopping}><ArrowLeft size={15} /> Continue shopping</button>
          </section>
          <OrderSummary items={items} subtotal={subtotal} shipping={0} note="Shipping options are available at checkout.">
            <button className="shop-button shop-button-dark shop-button-full" type="button" onClick={onCheckout}>Proceed to checkout <ArrowRight size={17} /></button>
            <div className="shop-secure-note"><ShieldCheck size={15} /> Secure checkout</div>
          </OrderSummary>
        </div>
      )}
    </div>
  )
}

function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <article className="shop-cart-item">
      <div className={`shop-cart-thumb art-${item.color}`}>
        <img src={`/products/${item.id}.png`} alt={item.name} />
      </div>
      <div className="shop-cart-product">
        <p>{item.category}</p>
        <h2>{item.name}</h2>
        <span>{`$${item.price.toFixed(2)} each`}</span>
        <button className="shop-remove-button" type="button" onClick={() => onRemove(item)}><Trash2 size={13} /> Remove</button>
      </div>
      <div className="shop-quantity-control" aria-label={`Quantity of ${item.name}`}>
        <button type="button" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => onQuantityChange(item.id, item.quantity - 1)}><Minus size={14} /></button>
        <span aria-live="polite">{item.quantity}</span>
        <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => onQuantityChange(item.id, item.quantity + 1)}><Plus size={14} /></button>
      </div>
      <strong className="shop-cart-line-total">${(item.price * item.quantity).toFixed(2)}</strong>
    </article>
  )
}

function CheckoutPage({ customer, items, shippingMethod, subtotal, onBack, onCustomerChange, onPlaceOrder, onShippingChange }) {
  if (items.length === 0) {
    return (
      <div className="shop-page shop-flow-page">
        <FlowHeading step="02" title="Checkout" description="A few details and it's yours." />
        <div className="shop-empty-state">
          <h2>Your cart is empty.</h2>
          <p>Add something to your cart before checking out.</p>
          <button className="shop-button shop-button-dark" type="button" onClick={onBack}>Return to cart <ArrowRight size={17} /></button>
        </div>
      </div>
    )
  }

  return (
    <div className="shop-page shop-flow-page">
      <FlowHeading step="02" title="Checkout" description="A few details and it's yours." />
      <form className="shop-flow-layout" onSubmit={onPlaceOrder}>
        <div className="shop-checkout-form">
          <section className="shop-form-section">
            <div className="shop-form-heading"><span>01</span><div><h2>Your details</h2><p>Where should we send your order?</p></div></div>
            <div className="shop-form-grid">
              <FormField id="firstName" label="First name" autoComplete="given-name" value={customer.firstName} onChange={onCustomerChange} />
              <FormField id="lastName" label="Last name" autoComplete="family-name" value={customer.lastName} onChange={onCustomerChange} />
              <FormField id="email" label="Email address" type="email" autoComplete="email" value={customer.email} onChange={onCustomerChange} />
              <FormField id="phone" label="Phone number" type="tel" autoComplete="tel" value={customer.phone} onChange={onCustomerChange} />
              <FormField id="address" label="Street address" autoComplete="street-address" value={customer.address} onChange={onCustomerChange} wide />
            </div>
          </section>

          <section className="shop-form-section">
            <div className="shop-form-heading"><span>02</span><div><h2>Shipping method</h2><p>Choose what works best for you.</p></div></div>
            <div className="shop-shipping-options">
              {Object.entries(shippingOptions).map(([key, option]) => (
                <label key={key} className={shippingMethod === key ? 'shop-shipping-option is-selected' : 'shop-shipping-option'}>
                  <input type="radio" name="shippingMethod" value={key} checked={shippingMethod === key} onChange={() => onShippingChange(key)} />
                  <span className="shop-radio-mark">{shippingMethod === key && <Check size={12} />}</span>
                  <span className="shop-shipping-copy"><strong>{option.label}</strong><small>{option.detail}</small></span>
                  <strong className="shop-shipping-price">{option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}</strong>
                </label>
              ))}
            </div>
          </section>
          <button className="shop-text-button shop-back-button" type="button" onClick={onBack}><ArrowLeft size={15} /> Back to cart</button>
        </div>

        <OrderSummary items={items} subtotal={subtotal} shipping={shippingOptions[shippingMethod].price} note="Taxes included. No hidden fees.">
          <button className="shop-button shop-button-dark shop-button-full" type="submit">Place order <ArrowRight size={17} /></button>
          <div className="shop-secure-note"><ShieldCheck size={15} /> Your details stay private.</div>
        </OrderSummary>
      </form>
    </div>
  )
}

function FormField({ id, label, type = 'text', autoComplete, value, onChange, wide = false }) {
  return (
    <div className={wide ? 'shop-field shop-field-wide' : 'shop-field'}>
      <label htmlFor={`checkout-${id}`}>{label}<span aria-hidden="true"> *</span></label>
      <input
        id={`checkout-${id}`}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

function FlowHeading({ step, title, description }) {
  return (
    <div className="shop-flow-heading">
      <p className="shop-overline">NITEHTESTSHOP / {step} — THE CHECKOUT</p>
      <h1>{title}<span className="shop-heading-period">.</span></h1>
      <p>{description}</p>
    </div>
  )
}

function ConfirmationPage({ order, onContinueShopping }) {
  const orderDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(order.date))

  return (
    <div className="shop-page shop-flow-page shop-confirmation-page">
      <div className="shop-confirmation-card">
        <div className="shop-confirmation-icon"><CheckCircle2 size={32} strokeWidth={1.5} /></div>
        <p className="shop-overline">ORDER CONFIRMATION</p>
        <h1>It's in good hands<span className="shop-heading-period">.</span></h1>
        <p className="shop-confirmation-message">Order placed successfully! Thanks for shopping with NitehTestShop.</p>
        <div className="shop-order-id"><span>ORDER ID</span><strong>{order.id}</strong></div>
        <div className="shop-confirmation-details">
          <div><span>Customer</span><strong>{order.customer.firstName} {order.customer.lastName}</strong></div>
          <div><span>Order date</span><strong>{orderDate}</strong></div>
          <div><span>Order status</span><strong className="shop-status"><span /> Pending</strong></div>
          <div><span>Shipping</span><strong>{shippingOptions[order.shippingMethod].label}</strong></div>
        </div>
        <div className="shop-confirmation-items">
          <div className="shop-confirmation-items-heading"><span>ORDERED PRODUCTS</span><span>AMOUNT</span></div>
          {order.items.map(item => (
            <div className="shop-confirmation-item" key={item.id}>
              <span>{item.name} <small>× {item.quantity}</small></span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="shop-confirmation-total"><span>Total amount</span><strong>${order.total.toFixed(2)}</strong></div>
        </div>
        <button className="shop-button shop-button-dark" type="button" onClick={onContinueShopping}>Continue shopping <ArrowRight size={17} /></button>
      </div>
    </div>
  )
}

export default ShopApp
