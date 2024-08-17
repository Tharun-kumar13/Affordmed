import React, { useState } from 'react';
import laptopProducts from './assets';
const ProductList = () => {
  const [sortOption, setSortOption] = useState('price');
  const [sortedProducts, setSortedProducts] = useState(laptopProducts);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    sortProducts(option);
  };

  const sortProducts = (option) => {
    let sortedArray = [...laptopProducts];

    switch (option) {
      case 'price':
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case 'discount':
        sortedArray.sort((a, b) => {
          const discountA = parseInt(a.discount.replace('%', ''));
          const discountB = parseInt(b.discount.replace('%', ''));
          return discountB - discountA;
        });
        break;
      case 'ratings':
        sortedArray.sort((a, b) => b.ratings - a.ratings);
        break;
      default:
        break;
    }

    setSortedProducts(sortedArray);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{}}>Laptop Products</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="discount">Discount</option>
          <option value="ratings">Ratings</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {sortedProducts.map(product => (
          <div className="box" key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img src={product.image} alt={product.productName} style={{ width: '20px', height: '20px', borderRadius: '8px' }} />
            <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{product.productName}</h2>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Ratings:</strong> {product.ratings} ★</p>
            <p><strong>Discount:</strong> {product.discount}</p>
            <p><strong>Availability:</strong> {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
