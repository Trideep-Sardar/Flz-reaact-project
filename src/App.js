import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
     <Router>
     <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
       </Routes>
     </Router>
   </>
  );
}

export default App;
