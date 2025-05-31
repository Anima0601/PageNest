import Home from "./HomePage/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Courses/Course";
import Sign from "./SignUpPage/Sign";
import Contact from "./ContactUS/Contact";
function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/course' element = {<Course/>}/>
        <Route path = '/signin' element = {<Sign/>}/>
        <Route path = '/contactus' element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
