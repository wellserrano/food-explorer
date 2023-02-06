import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'

import { Products } from '../pages/Products'
import { Checkout } from '../pages/Checkout'
import { Favorites } from '../pages/Favorites'
import { EditProduct } from '../pages/EditProduct';

import { Orders } from '../pages/Orders'
import { OrderDetails } from '../pages/OrderDetails'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/checkout" element={ <Checkout /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/products/edit" element={ <EditProduct />} />
      <Route path="/products/:product_id" element={ <Products />} />

      <Route path="/orders" element={ <Orders />} />
      <Route path="/orders/details" element={ <OrderDetails />} />
    </Routes>
  )
}