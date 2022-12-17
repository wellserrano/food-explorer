import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { NewProduct } from '../pages/NewProduct';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/newproduct" element={ <NewProduct />} />
    </Routes>
  )
}