import { BrowserRouter, Routes, Route } from "react-router-dom"; 
 
import Navigation from "./components/Navigation"; 
import Home from "./components/Home"; 
import Gallery from "./components/Gallery"; 
import Contacts from "./components/Contacts"; 
import Footer from "./components/Footer"; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <Navigation /> 
 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contacts />} /> 
      </Routes> 

      <Footer />
    </BrowserRouter> 
  ); 
} 
 
export default App;