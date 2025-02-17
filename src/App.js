import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddBook from './Admin/Addbook';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/AdminLogin';
import AddBookPage from './Admin/Createbook';
import CreateUser from './Admin/Createuser';
import DashboardBlock from './Admin/DashboardBlock';
import Navbar from './Admin/Navbar';
import Sidebar from './Admin/Sidebar';
import Signup from './Admin/Signup';
import AdminStaffSalary from './Admin/Stafsalary';
import StudentFees from './Admin/StudentFees';
import './App.css';
import BookTable from './Staff/Booktable';
import Login from './Staff/Login';
import StaffDashboard from './Staff/StaffDashboard';
import Staffpage from './Staff/Staffpage';
import StaffTable from './Staff/StaffTable';
import UserDashboard from './User/Dashboard';
import MyFees from './User/Myfees';
import UserLoginPage from './User/UserLogin';
import UserProfile from './User/Userprofile';
import UserSidebar from './User/Usersidebar';
import UserTable from './User/Usertable';
import LibrarySettings from './Admin/Setting';
import AllBooks from './Admin/AllBooks';
import StaffProfile from './Staff/StaffProfile';
 import SalaryPage from './Staff/MySalary';
 import PlanCard from './User/PlanCard';
import AddPlanForm from './Admin/AddPlan';
import AdminPlanCard from './Admin/PlanCard';
import MyPlans from './User/MyPlans';
import UserPlansTable from './Admin/UserPlansTable';
import AdminDashboard from './Admin/AdminDashboard';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/" element={<AdminDashboard/>} />
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
      <Route path="/studentfees" element={<StudentFees/>} />
      <Route path="/add-plan" element={<AddPlanForm/>} />
      <Route path="/plans" element={<AdminPlanCard/>} />
      <Route path="/user-plans" element={<UserPlansTable/>} />



      





      



      




        {/* Staff Section */}
        <Route path="/staff-login" element={<Login />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/staff-profile" element={<StaffProfile/>} />
        <Route path="/my-salary" element={<SalaryPage/>} />


        



        {/* User Section */}
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/user-sidear" element={<UserSidebar />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/user-table" element={<UserTable/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="/plans-card" element={<PlanCard/>} />
        <Route path="/my-plans" element={<MyPlans/>} />










      </Routes>
    </div>
  </Router>
  )
}
export default App;
