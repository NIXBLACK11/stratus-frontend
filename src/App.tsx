import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MouseLight from "./components/MouseLight";
import { UserPage } from "./pages/UserPage";
import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className='bg-[#000000] h-full w-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/user/:email' element={<UserPage />} />
        </Routes>
        <MouseLight color="248, 115, 22" size={1000} opacity={0.2} />
      </BrowserRouter>
    </div>
  )
}

export default App
