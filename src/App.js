import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/AdminLogin';
import AddBookPage from './Admin/Createbook';
import CreateUser from './Admin/Createuser';
import DashboardBlock from './Admin/DashboardBlock';
import Navbar from './Admin/Navbar';
import Sidebar from './Admin/Sidebar';
import Signup from './Admin/Signup';
import './App.css';
import BookTable from './Staff/Booktable';
import Login from './Staff/Login';
import StaffDashboard from './Staff/StaffDashboard';
import Staffpage from './Staff/Staffpage';
import StaffTable from './Staff/StaffTable';
import UserDashboard from './User/Dashboard';
import UserLoginPage from './User/UserLogin';
import UserProfile from './User/Userprofile';
import UserSidebar from './User/Usersidebar';
import UserTable from './User/Usertable';
import AddBook from './Admin/Addbook';
import LibrarySettings from './Admin/Setting';
import AllBooks from './Admin/AllBooks';
import StaffProfile from './Staff/StaffProfile';
import AdminStaffSalary from './Admin/Stafsalary';
import MyFees from './User/Myfees';
 


function App() {
  return (
    <Router>
    <div>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/" element={<Admin/>} />
      <Route path="/dashboardB" element={<DashboardBlock/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/add-user" element={<CreateUser />} />
      <Route path="/add-book" element={<AddBookPage />} />
      <Route path="/get-books" element={<AllBooks/>} />
      <Route path="/add-staff" element={<Staffpage />} />
      <Route path="/staffs" element={<StaffTable />} />
      <Route path="/setting" element={<LibrarySettings/>} />
      <Route path="/addbook" element={< AddBook/>} />
      <Route path="/staffsalary" element={< AdminStaffSalary/>} />
      <Route path="/myfees" element={< MyFees/>} />





      



      




        {/* Staff Section */}
        <Route path="/staff-login" element={<Login />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/staff-profile" element={<StaffProfile/>} />


        



        {/* User Section */}
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/user-sidear" element={<UserSidebar />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/user-table" element={<UserTable/>} />
        <Route path="/user-profile" element={<UserProfile/>} />








      </Routes>
    </div>
  </Router>
  )
}
export default App;
