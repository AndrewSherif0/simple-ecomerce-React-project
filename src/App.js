
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { Route, Routes } from 'react-router';

import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
       
      
      <Routes>
     

        <Route path="/" element={
          <>
          <Navbar />
          <Slider />
          <ProductList />
          </>
        } />
        <Route path="/about" element={
           <>
           <Navbar />
           <About/>
           </> 
          } />
        <Route path='/Product/:productId' element={
           <>
           <Navbar />
           <ProductDetails /></>}/>
       

        
      </Routes>
     
      
    </div>
  );
}

export default App;
