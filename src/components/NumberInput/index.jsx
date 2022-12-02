import { Container, ChangeButton, Quantity } from './styles'

import { FiPlus, FiMinus } from 'react-icons/fi'

import { Button } from '../Button'

export function NumberInput({ ...rest }) {
  return(
    <Container>
      <ChangeButton>
        <FiMinus />
      </ChangeButton>
      <Quantity type="Number" { ...rest } />
      <ChangeButton>
        <FiPlus />  
      </ChangeButton>
      <Button title="incluir" />
    </Container>
  )
}