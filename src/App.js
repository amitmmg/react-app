import { useState } from "react";
import axios from "axios";
import "./css/style.css";

function App() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newProduct).forEach(([key, value]) => formData.append(key, value));

    try {
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product Added Successfully!");
      setNewProduct({ name: "", price: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Add Product</h2>
      <form onSubmit={addProduct} className="product-form">
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;
