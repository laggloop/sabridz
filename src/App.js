import {BrowserRouter, Routes, Route} from "react-router-dom";
import Apps from "./Apps";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
export default function App(){
  return(
    <BrowserRouter>
    <div className="">
    <Routes>
            <Route path="/About" element={<About />}/>
            <Route exact path="/" element={<Apps />} />
            <Route path="/Contact" element={<Contact />}/>
            <Route exact path="/Products" element={<Products />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}