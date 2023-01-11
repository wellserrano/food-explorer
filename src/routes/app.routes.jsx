import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Checkout } from '../pages/Checkout'
import { Favorites } from '../pages/Favorites'
import { NewProduct } from '../pages/NewProduct';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/details" element={ <Details />} />
      <Route path="/checkout" element={ <Checkout /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/newproduct" element={ <NewProduct />} />
    </Routes>
  )
}