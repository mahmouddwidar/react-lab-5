import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowProduct from './Components/ShowProduct';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <Routes>
            <Route path='/' element={<ProductList />}></Route>
            <Route path='/products/:id' element={<ShowProduct />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
