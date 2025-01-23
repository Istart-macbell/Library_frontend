import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import AddBookPage from './Admin/Createbook';
import CreateUser from './Admin/Createuser';
import Signup from './Admin/Signup';
import './App.css';
import Admin from "./components/Admin";
import DashboardBlock from './components/DashboardBlock';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BookTable from './Staff/Booktable';
import Login from './Staff/Login';
import StaffDashboard from './Staff/StaffDashboard';
import Staffpage from './Staff/Staffpage';
import UserDashboard from './User/Dashboard';
import UserLoginPage from './User/UserLogin';
import UserSidebar from './User/Usersidebar';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/" element={<Admin/>}> </Route>
      <Route path="/dashboardB" element={<DashboardBlock/>}> </Route>
      <Route path="/navbar" element={<Navbar/>}> </Route>
      <Route path="/sidebar" element={<Sidebar/>}> </Route>
      <Route path="/add-user" element={<CreateUser />} />
      <Route path="/add-book" element={<AddBookPage />} />
      <Route path="/add-staff" element={<Staffpage />} />
      



      




        {/* Staff Section */}
        <Route path="/staff-login" element={<Login />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/staff-booktable" element={<BookTable />} />
        



        {/* User Section */}
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/user-sidear" element={<UserSidebar />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />







      </Routes>
    </div>
  </Router>
  )
}
export default App;
