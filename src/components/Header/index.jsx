import { Container, AdminButton } from './styles'
import { Link, useNavigate } from 'react-router-dom'

// Components
import { Button } from '../Button'
import { Switch } from '../Switch'

// Icons
import { FiLogOut } from 'react-icons/fi'
import { TbReceipt, TbRuler } from 'react-icons/tb'

// hooks
import { useAuth } from '../../hooks/auth'
import { ThemeContext } from '../../hooks/theme'
import React, { useEffect, useState, useContext } from 'react'

export function Header ({ children, productsDetails, ...rest }) {
  const [items, setItems] = useState([])
  const [animate, setAnimate] = useState(false)

  const { toggleSwitch } = useContext(ThemeContext)
  const { user, signOut, fetchOrderedItems } = useAuth()

  const navigate = useNavigate()

  function handleLogOut () {
    signOut()
  }

  function handleCartButton () {
    navigate('/checkout')
  }

  function handleAdmin () {
    navigate('/products/edit', { state: { productsDetails } })
  }

  useEffect(() => {
    const items = fetchOrderedItems()
    setItems(items || [])
  }, [])

  return (
    <Container>
      <Link className='home-button' to='/' onClick={ () => { setAnimate(true) } }>
        <div style={{ marginRight: '2rem' }} >
          <svg
            className={ animate ? 'animation-click' : ''}
            onAnimationEnd={() => setAnimate(false)}
            width="44"
            height="48"
            viewBox="0 0 44 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
          </svg>
        </div>
        <span>food.exp</span>
      </Link>

      <Link className='favorites' to="/favorites">Meus favoritos</Link>

      <div className="children-wrapper">
        { children }
      </div>

      {
        user.admin
          ? <AdminButton onClick={ handleAdmin }>Administrador</AdminButton>

          : <Button
          title={`Meu pedido (${items.length ?? 0})`}
          icon={ TbReceipt }
          onClick={ handleCartButton }
        />
      }

      <FiLogOut onClick={ handleLogOut } />

      <Switch defaultChecked onChange={ toggleSwitch }/>

    </Container>
  )
}
