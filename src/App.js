import { Route, Routes } from 'react-router-dom'
import Viewcategory from './business/Category/Viewcategory'
import Footer from './business/includes/Footer/Footer'
import Navbar from './business/includes/Navbar/Navbar'
import Manage from './business/pages/Manage/Manage'
import About from './business/pages/About/About'
import Contact from './business/pages/Contact/Contact'
import Dashboard from './business/pages/Dashboard/Dashboard'
import Home from './business/pages/Home/Home'
import Login from './business/pages/Login/Login'
import Website from './business/pages/Webframe/Website'
import View from './business/pages/Manage/View'
import Profile from './business/pages/User/Profile'
import NotFound from './business/pages/404 page/Notfound'
import Search from './business/Search/Search'
import Searchpage from './business/Search/Searchpage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/viewcategory' element={<Viewcategory/>}></Route>
        <Route path='/website' element={<Website/>}></Route>
        <Route path='/Manageprofile' element={<Manage/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/searchpage' element={<Searchpage/>}></Route>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
