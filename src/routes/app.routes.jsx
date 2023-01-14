import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Orders } from '../pages/Orders'
import { Products } from '../pages/Products'
import { Checkout } from '../pages/Checkout'
import { Favorites } from '../pages/Favorites'
import { NewProduct } from '../pages/NewProduct';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/orders" element={ <Orders />} />
      <Route path="/checkout" element={ <Checkout /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/newproduct" element={ <NewProduct />} />
      <Route path="/products/:product_id" element={ <Products />} />
    </Routes>
  )
}