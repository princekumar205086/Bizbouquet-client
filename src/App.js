import { Route, Routes } from 'react-router-dom'
import Footer from './business/includes/Footer/Footer'
import Navbar from './business/includes/Navbar/Navbar'
import About from './business/pages/About/About'
import Dashboard from './business/pages/Dashboard/Dashboard'
import Home from './business/pages/Home/Home'
import Login from './business/pages/Login/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
