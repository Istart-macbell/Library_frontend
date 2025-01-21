import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import Signup from './Admin/Signup'
import Login from './Staff/Login'
import UserLoginPage from './User/UserLogin';
import UserSidebar from './User/Usersidebar';
import UserDashboard from './User/Dashboard';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />




        {/* Staff Section */}
        <Route path="/staff-login" element={<Login />} />



        {/* User Section */}
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/user-sidear" element={<UserSidebar />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />







      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
