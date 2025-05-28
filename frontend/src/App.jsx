import Home from "./HomePage/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Courses/Course";
function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/course' element = {<Course/>}/>
      </Routes>
    </div>
  )
}

export default App
