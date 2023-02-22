import { Container, AdminButton, Blank } from './styles'
import { Link, useNavigate } from 'react-router-dom'

// Components
import { Button } from '../Button'
import { SearchInput } from '../SearchInput'

// Icons
import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TbReceipt } from 'react-icons/tb'

// hooks
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function NewProductHeader () {
  const [items, setItems] = useState([])

  const { fetchOrderedItems } = useAuth()
  const navigate = useNavigate()

  function handleCartButton () {
    navigate('/checkout')
  }

  useEffect(() => {
    const items = fetchOrderedItems()
    setItems(items || [])
  }, [])

  return (
    <Container>

      <div className="logo-container">
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <Link to="/"><span>food.exp</span></Link>
      </div>

      <AdminButton>Administrador</AdminButton>
      <Button
          title={`Meu pedido (${items.length ?? 0})`}
          icon={ TbReceipt }
          onClick={ handleCartButton }
        />

    </Container>
  )
}
