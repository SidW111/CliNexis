import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (<BrowserRouter>
  <Navbar/>
  <Routes>
    {/* <Route path='/' element={<Navbar/>}/>  */}
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>} />
  </Routes>
  </BrowserRouter>)
}

export default App;
