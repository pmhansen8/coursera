import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./Home"
import {Experience} from "./Experience";
import {Projects} from "./Projects"
import {Certifications} from "./Certifications"
import {Resume} from "./Resume"

function App() {
  document.title = "Portfoli"
  document.label = "hello"
  return (
 <Router>
   <Routes>
     <Route path ="/" element={<Home/>}/>
     <Route path ="/Experience" element={<Experience/>}/>
       <Route path = "/Projects" element={<Projects/>}/>
       <Route path = "/Certifications" element={<Certifications/>}/>
       <Route path = "/Resume" element={<Resume/>}/>
   </Routes>
 </Router>
  );
}

export default App;
