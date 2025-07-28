import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./pages/Login"
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>

    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
