import { Container, AdminButton, Blank } from './styles'

//Components
import { Button } from '../Button'
import { SearchInput } from '../SearchInput'

//Icons
import { FiLogOut, FiSearch } from 'react-icons/fi'
import { TbReceipt } from 'react-icons/tb'

//hooks
import { useAuth } from '../../hooks/auth'


export function NewProductHeader() {
  const { user, signOut } = useAuth();

  function handleLogOut() {
    signOut();
  }

  return (
    <Container>

      <div className="logo-container">
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <span>food.exp</span>
      </div>

      <AdminButton>Administrador</AdminButton> :
      <Button 
        title="Meu pedido (0)" 
        icon={ TbReceipt } 
      />

    </Container>
  )
}