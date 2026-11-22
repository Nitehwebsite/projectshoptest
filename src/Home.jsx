import React, { useEffect, useState } from 'react';
import ProductCard from './components/ui/ProductCard';
import { Search, ShoppingBag, UserRound } from 'lucide-react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [activePanel, setActivePanel] = useState(null);
    const [accountEmail, setAccountEmail] = useState('');
    const [accountMessage, setAccountMessage] = useState('');
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState('');
    const cartCount = cartItems.length;

    useEffect(() => {
        const controller = new AbortController();

        const loadProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/products', {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Products request failed: ${response.status}`);
                }

                const data = await response.json();
                const productList = Array.isArray(data)
                    ? data
                    : data?.results ?? data?.products ?? data?.data ?? [];

                setProduct(Array.isArray(productList) ? productList : []);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching products:', error);
                    setLoadError('Could not load products. Check that the API server is running.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        loadProducts();
        return () => controller.abort();
    }, []);

    const filteredProducts = products.filter(product => {
        const category = typeof product.category === 'object'
            ? product.category?.name ?? product.category?.title ?? product.category_name ?? ''
            : product.category ?? product.category_name ?? '';
        return `${product.name ?? product.title ?? product.product_name ?? ''} ${category}`
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());
    });

    return (
        <>
            <header className="store-header" id="top">
                <div className="store-header-main">
                    <a className="store-brand" href="#top" aria-label="Northline home">
                        <span className="store-brand-mark">N</span>
                        <span className="store-brand-name">NORTHLINE<span>GOODS</span></span>
                    </a>

                    <form className="store-search" role="search" onSubmit={event => event.preventDefault()}>
                        <Search size={18} aria-hidden="true" />
                        <input
                            type="search"
                            aria-label="Search products"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>

                    <div className="store-actions">
                        <button
                            type="button"
                            className="store-action"
                            aria-label="Account"
                            aria-expanded={activePanel === 'account'}
                            onClick={() => setActivePanel(activePanel === 'account' ? null : 'account')}
                        >
                            <UserRound size={20} />
                            <span>Account</span>
                        </button>
                        <button
                            type="button"
                            className="store-action store-cart"
                            aria-label={`Shopping bag, ${cartCount} items`}
                            aria-expanded={activePanel === 'cart'}
                            onClick={() => setActivePanel(activePanel === 'cart' ? null : 'cart')}
                        >
                            <ShoppingBag size={20} />
                            <span>Bag</span>
                            <b>{cartCount}</b>
                        </button>
                    </div>

                    {activePanel === 'account' && (
                        <section className="header-popover" aria-label="Account sign in">
                            <h2>Your account</h2>
                            <form onSubmit={event => {
                                event.preventDefault();
                                setAccountMessage('Account sign-in is not connected in this demo.');
                            }}>
                                <label htmlFor="account-email">Email address</label>
                                <input
                                    id="account-email"
                                    type="email"
                                    value={accountEmail}
                                    onChange={event => setAccountEmail(event.target.value)}
                                    placeholder="you@example.com"
                                    required
                                />
                                <button type="submit">Continue</button>
                            </form>
                            {accountMessage && <p className="popover-message" role="status">{accountMessage}</p>}
                        </section>
                    )}

                    {activePanel === 'cart' && (
                        <section className="header-popover cart-popover" aria-label="Shopping bag">
                            <h2>Your bag</h2>
                            {cartCount > 0 ? (
                                <>
                                    <ul className="cart-items">
                                        {cartItems.map((item, index) => (
                                            <li key={`${item.id ?? item.name ?? 'item'}-${index}`}>
                                                {item.name ?? item.title ?? 'Product'}
                                            </li>
                                        ))}
                                    </ul>
                                    <button type="button" onClick={() => setCartItems([])}>Remove items</button>
                                </>
                            ) : (
                                <p>Your bag is empty.</p>
                            )}
                        </section>
                    )}
                </div>
                <nav className="store-nav" aria-label="Main navigation">
                    <a className="is-current" href="#products">Shop all</a>
                    <a href="#products">New arrivals</a>
                    <a href="#products">Best sellers</a>
                    <a href="#products">Sale</a>
                </nav>
            </header>

            <main className="products-page" id="products">
            <header className="products-heading">
                <p className="products-eyebrow">CURATED FOR YOU</p>
                <h1>Our Products</h1>
                <p className="products-subtitle">Find your next everyday favorite.</p>
            </header>
            <div className="products-grid">
                {isLoading && <p className="products-empty">Loading products...</p>}
                {!isLoading && loadError && <p className="products-empty" role="alert">{loadError}</p>}
                {!isLoading && !loadError && filteredProducts.map((product, index) => (
                    <ProductCard
                        key={product.id ?? product._id ?? index}
                        product={product}
                        index={index}
                        onAddToCart={() => setCartItems(items => [...items, product])}
                    />
                ))}
                {!isLoading && !loadError && filteredProducts.length === 0 && (
                    <p className="products-empty">No products match “{searchTerm}”.</p>
                )}
                </div>
            </main>
        </>
    )
}

export default Home
