import { useState, useEffect } from "react";
import axios from "axios";
import "./css/style.css";
import { Link } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setNewProduct({ ...newProduct, image: e.target.files[0] });
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };

  // Add Product
  const addProduct = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("image", newProduct.image);

    try {
      const response = await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product Added Successfully!");
      setProducts([...products, response.data.product]);
      setNewProduct({ name: "", price: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <h1>Welcome to Admin Panel</h1>
<Link to="./products">Products</Link>
      <h2>Add Product</h2>
      <form onSubmit={addProduct} className="product-form">
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
      </>    
  );
}

export default App;
