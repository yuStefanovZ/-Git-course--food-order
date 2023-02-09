import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from "./components/Cart/Cart";

function App() {
 const [showCart, setShowCart] = useState(false);

 const showCartHandler = () => {
setShowCart(true)
 };

 const hideCartHandler = () => {
setShowCart(false)
 };

  return (
    <CartProvider>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
