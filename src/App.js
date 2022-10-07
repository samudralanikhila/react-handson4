import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Component/Home";
import Student from "./Component/Student";
import ContactUs from "./Component/ContactUS";
import AddingStudent from "./Component/AddingStudent";
import './App.css';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Student" element={<Student/>}></Route>
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
        <Route path="/AddingStudent" element={<AddingStudent/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
