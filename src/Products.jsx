import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="product-container">
      <div className="header">
        <h2>Product List</h2>
        <Link to="/" className="add-product-button">Add Product</Link>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <img 
                    src={`http://localhost:5000/uploads/${product.image}`} 
                    alt={product.name} 
                    className="product-image"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-products">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
