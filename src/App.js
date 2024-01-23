import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import DashboardPage from './pages/DashboardPage';
import AboutusPage from './pages/AboutusPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
function App() {
  return (
    <> 
     <BrowserRouter>
     <CustomNavbar/>
      <Routes>
         <Route path="/" index  element={<HomePage/>}/>
         <Route path="/services" element={<ServicesPage/>}/>
         <Route path='/products' element={<ProductsPage/>}/>
         <Route path='/dashboard' element={<DashboardPage/>}/>
         <Route path='/aboutus' element={<AboutusPage/>}/>
         <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
