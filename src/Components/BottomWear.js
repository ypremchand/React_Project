import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

export default function BottomWear() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.apify.com/v2/datasets/R1eJPlZnidv8ZvKIv/items?clean=true&format=json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Log the data for debugging

        setProducts(data); // Set products directly if data is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <div>
      <div className="container">
      <h1 className="my-2">BottomWear</h1>
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 text-white" style={{backgroundColor:"#06454f"}}>
                <img 
                  src={product.thumbnailImage} 
                  className="card-img-top" 
                  alt={product.title} 
                  style={{ width: "70px", margin: "5px auto" }} 
                  onError={(e) => {
                    // Handle image load error
                    e.target.src = 'https://via.placeholder.com/70';
                  }}
                  onLoad={() => console.log(`Image loaded: ${product.thumbnail}`)} // Log loaded image URLs
                />
                <div className="card-body">
                  <h6 className="card-title"style={{fontSize:"15px"}}>{product.title}</h6>
                  <h6 className="card-title"style={{fontSize:"15px"}}>{product.brand}</h6>
                  <p className="card-text">
                    <strong>
                      Price: {product.price ? `${product.price.value} ${product.price.currency}` : 'N/A'}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}
