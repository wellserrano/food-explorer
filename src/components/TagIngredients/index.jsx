import { Container } from './styles'

import { Tag } from '../Tag'

export function TagIngredients() {
  return (
    <Container>
      <Tag 
        placeholder="Adicionar"
        value="Pão Naan"
      />
      <Tag 
        placeholder="Adicionar"
        isNew
      />
    </Container>
  )
}