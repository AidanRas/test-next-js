import React, { useState, useEffect } from 'react';

export default function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
          <div style={{display: 'flex', flexFlow: "row wrap"}}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className='prodStyle' key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price} USD</p>
              <img style={{width:"100px"}} src={product.image} alt={product.title} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      </div>
    </div>
  );
}
