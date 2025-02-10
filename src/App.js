import logo from './logo.svg';
import './css/style.css';
import './css/script';
function App() {
  return (
  
<>
    <h1>Welcome toel</h1>
        <div class="dashboard">
            <div class="card">Total Users: <span id="userCount">0</span></div>
            <div class="card">Active Sessions: <span id="sessionCount">0</span></div>
        </div>
        <h2>User List</h2>
        <table class="user-table">
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
            </>
  );
}

export default App;
