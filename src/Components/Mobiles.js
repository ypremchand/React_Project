import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

export default function Mobiles() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.apify.com/v2/datasets/vUxbwvjLvRvXFDZPW/items?clean=true&format=json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Log the data for debugging

        // Inspect the data to understand its structure
        if (Array.isArray(data)) {
          data.forEach((product, index) => {
            console.log(`Product ${index}:`, product);
            console.log(`Thumbnail URL: ${product.thumbnail}`);
          });
          setProducts(data); // Set products if data is an array of products
        } else {
          console.error('Unexpected data structure:', data);
          setError('Unexpected data structure');
        }
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
      <h1 className="my-2">Mobiles...</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100" style={{backgroundColor:"#9d9ce6"}}>
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
                  <h6 className="card-title fs-5" style={{fontSize:"15px"}}>{product.title}</h6>
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
