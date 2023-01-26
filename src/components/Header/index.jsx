import { Container, AdminButton } from './styles'
import { Link, useNavigate } from 'react-router-dom'

//Components
import { Button } from '../Button'

//Icons
import { FiLogOut } from 'react-icons/fi'
import { TbReceipt } from 'react-icons/tb'

//hooks
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'


export function Header({ children }) {
  const [items, setItems] = useState([])
  const { user, signOut, fetchOrderedItems } = useAuth();

  const navigate = useNavigate();

  function handleLogOut() {
    signOut();
  }

  function handleCartButton() {
    navigate('/checkout')
  }

  useEffect(() => {
    const items = fetchOrderedItems();
    setItems(items)
  }, [])

  return (
    <Container>
      <Link className='homeButton' to='/'>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <span>food.exp</span>
      </Link>

      <a href="/favorites">Meus favoritos</a>

      { children }

      {
        user.admin ? 
        <AdminButton to="/newproduct">Administrador</AdminButton>
        
        :
        <Button 
          title={`Meu pedido (${items.length})`}
          icon={ TbReceipt }
          onClick={ handleCartButton }
        />
      }

      <FiLogOut onClick={ handleLogOut } />


    </Container>
  )
}