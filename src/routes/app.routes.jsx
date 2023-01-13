import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { Details } from '../pages/Details'
import { NewProduct } from '../pages/NewProduct';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/details" element={ <Details />} />
      <Route path="/newproduct" element={ <NewProduct />} />
    </Routes>
  )
}