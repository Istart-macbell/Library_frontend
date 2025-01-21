import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import Signup from './Admin/Signup'
import Login from './Staff/Login'
import UserLoginPage from './User/UserLogin';


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



      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
