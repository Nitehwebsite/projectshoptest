function formatPrice(amount) {
  return `$${amount.toFixed(2)}`
}

function OrderSummary({ items, subtotal, shipping, children, note }) {
  const total = subtotal + shipping

  return (
    <aside className="shop-summary">
      <div className="shop-summary-heading">
        <div>
          <p className="shop-overline">YOUR ORDER</p>
          <h2>Order summary</h2>
        </div>
        <span className="shop-summary-count">{items.reduce((count, item) => count + item.quantity, 0)} items</span>
      </div>

      <ul className="shop-summary-items">
        {items.map(item => (
          <li key={item.id} className="shop-summary-item">
            <img className={`shop-summary-image art-${item.color}`} src={`${import.meta.env.BASE_URL}products/${item.id}.png`} alt="" />
            <span className="shop-summary-item-name">{item.name}<small>Qty {item.quantity}</small></span>
            <span className="shop-summary-item-price">{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <dl className="shop-totals">
        <div><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
        <div><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd></div>
        <div className="shop-grand-total"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
      </dl>

      {note && <p className="shop-summary-note">{note}</p>}
      {children}
    </aside>
  )
}

export default OrderSummary
