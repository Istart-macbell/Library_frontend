import './App.css';
import Signup from './components/Signup';
import Login from "./components/Login";
import AdminLoginPage from './Admin/AdminLogin';

function App() {
  return (
    <>

    {/* // <h1 className="text-3xl">This is for test purpose</h1> */}
    <Signup/>
    <Login />
    <AdminLoginPage/>

    </>
  
  );
}

export default App;
