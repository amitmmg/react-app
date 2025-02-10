import logo from './logo.svg';
import './css/style.css';
import './css/script';

function App() {
  return (
    <>
      <h1>Welcome to El</h1>
      <div className="dashboard">
        <div className="card">Total Users: <span id="userCount">0</span></div>
        <div className="card">Active Sessions: <span id="sessionCount">0</span></div>
      </div>
      
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
        </tbody>
      </table>
      
      <h2>Products</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 1" />
          <h3>Product 1</h3>
          <p>High-quality product with amazing features.</p>
          <p><strong>Price:</strong> $29.99</p>
        </div>
        
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Experience top-notch performance and durability.</p>
          <p><strong>Price:</strong> $49.99</p>
        </div>
        
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 3" />
          <h3>Product 3</h3>
          <p>Get the best value for your money with this product.</p>
          <p><strong>Price:</strong> $19.99</p>
        </div>
      </div>
    </>
  );
}

export default App;
