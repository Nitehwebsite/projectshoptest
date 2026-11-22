import React from 'react';
function ProductCard({ product = {}, onAddToCart, index = 0 }) {
  const name = product.name ?? product.title ?? product.product_name ?? 'Product';
  const category = typeof product.category === 'object'
    ? product.category?.name ?? product.category?.title
    : product.category;
  const image = product.image_url ?? product.imageUrl ?? product.image ?? product.photo;
  const imagePath = typeof image === 'string' ? image : image?.url ?? image?.src;
  const productText = `${name} ${category ?? product.category_name ?? ''}`.toLowerCase();
  const categoryImages = [
    { keywords: /\b(laptops?|notebooks?|computers?)\b/, images: ['photo-1496181133206-80ce9b88a853', 'photo-1517336714731-489689fd1ca8', 'photo-1515879218367-8466d910aaa4'] },
    { keywords: /\b(t[\s-]?shirts?|tees?|shirts?|hoodies?|clothing|apparel)\b/, images: ['photo-1521572163474-6864f9cf17ab', 'photo-1583743814966-8936f37f4678', 'photo-1562157873-818bc0726f68'] },
    { keywords: /\b(shoes?|sneakers?|boots?)\b/, images: ['photo-1542291026-7eec264c27ff', 'photo-1600185365483-26d7a4cc7519', 'photo-1552346154-21d32810aba3'] },
    { keywords: /\b(phones?|mobiles?|smartphones?)\b/, images: ['photo-1511707171634-5f897ff02aa9', 'photo-1598327105666-5b89351aff97', 'photo-1512499617640-c74ae3a79d37'] },
    { keywords: /\b(headphones?|headsets?|earbuds?|speakers?|audio)\b/, images: ['photo-1505740420928-5e560c06d30e', 'photo-1484704849700-f032a568e944', 'photo-1546435770-a3e426bf472b'] },
    { keywords: /\b(watches?|wearables?)\b/, images: ['photo-1523275335684-37898b6baf30', 'photo-1508685096489-7aacd43bd3b1'] },
    { keywords: /\b(cameras?)\b/, images: ['photo-1516035069371-29a1b244cc32', 'photo-1510127034890-2a4b2a5b18b2'] },
    { keywords: /\b(monitors?|displays?)\b/, images: ['photo-1527443224154-c4a3942d3acf', 'photo-1527443154391-507e9dc6c5cc'] },
    { keywords: /\b(keyboards?)\b/, images: ['photo-1587829741301-dc798b83add3', 'photo-1595225476474-87563907a212'] },
    { keywords: /\b(lamps?|lighting)\b/, images: ['photo-1507473885765-e6ed057f782c', 'photo-1507473885765-e6ed057f782c'] },
    { keywords: /\b(books?|novels?|textbooks?)\b/, images: ['photo-1544947950-fa07a98d237f', 'photo-1512820790803-83ca734da794'] },
    { keywords: /\b(basketballs?|sports?)\b/, images: ['photo-1546519638-68e109498ffc', 'photo-1519861531473-9200262188bf'] },
  ];
  const matchedCategory = categoryImages.find(({ keywords }) => keywords.test(productText));
  const imageSeed = String(product.id ?? product._id ?? name)
    .split('')
    .reduce((seed, character) => seed + character.charCodeAt(0), 0);
  const matchedImage = matchedCategory?.images[imageSeed % (matchedCategory?.images.length ?? 1)];
  const categoryImageUrl = matchedImage
    ? `https://images.unsplash.com/${matchedImage}?auto=format&fit=crop&w=900&q=90`
    : undefined;
  const apiImageUrl = imagePath?.startsWith('/') ? `http://127.0.0.1:8000${imagePath}` : imagePath;
  const imageUrl = apiImageUrl ?? categoryImageUrl ?? 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=90';
  const price = product.price ?? product.cost;
  const currency = product.currency ? `${product.currency} ` : '';

  return (
    <article className="product-card" style={{ animationDelay: `${Math.min(index, 8) * 75}ms` }}>

      <img
        src={imageUrl}
        alt={name}
        className="product-image"
        loading="lazy"
      />

      <div className="product-details">

        <p className="product-category">
          {category ?? product.category_name ?? 'Product'}
        </p>

        <h2 className="product-name">
          {name}
        </h2>

        <p className="product-price">
          {price == null ? 'Price unavailable' : `${currency}${price}`}
        </p>

        <button className="product-button" onClick={onAddToCart}>
          Add to Cart
        </button>

      </div>
    </article>
  );
}

export default ProductCard;
