import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductDetail from "./Components/Product/ProductDetail";
import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import CategoryStore from "./Pages/CategoryStore";
import ProductsStore from "./Pages/ProductsStore";
import FinishedOrder from './Components/Cart/FinishedOrder';
import Generic from "./Pages/Generic";
import CartProvider from './Context/CartContext'
import './App.css'

function App() {
  return (
    <>
      <CartProvider>
        <header><Navbar /></header>

        <main className="d-flex justify-content-center align-items-center flex-column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path='/cart' element={<CartPage />} />
            <Route exact path='/category' element={<CategoryStore />} />
            <Route exact path="/products" element={<ProductsStore />} />
            <Route exact path="/category/:categoryId" element={<CategoryStore />} />
            <Route exact path="/products/:productId" element={<ProductDetail />} />
            <Route exact path="/finishedorder/:id" element={<FinishedOrder />} />
            <Route path="/*" element={<Generic />} />

          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
