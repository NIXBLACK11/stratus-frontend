import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MouseLight from "./components/MouseLight";
import { Landing } from "./pages/Login";

function App() {

  return (
    <div className='bg-[#000000] min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/projects' element={<AllProjects />} /> */}
        </Routes>
        <MouseLight color="31, 81, 255" size={1000} opacity={0.2} />
      </BrowserRouter>
    </div>
  )
}

export default App
