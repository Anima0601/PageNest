import Home from "./HomePage/Home"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Course from "./Courses/Course";
import Sign from "./SignUpPage/Sign";
import Contact from "./ContactUS/Contact";
import { useAuth } from "./Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [authUser , setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/course' element = {authUser?<Course/>:<Navigate to = "/signin"></Navigate>}/>
        <Route path = '/signin' element = {<Sign/>}/>
        <Route path = '/contactus' element = {<Contact/>}/>
      </Routes>
        <ToastContainer 
         position="top-center" 
         autoClose={3000} 
         hideProgressBar={false}
         newestOnTop
      />
    </div>
  )
}

export default App
