import { Container } from './styles'

import { NewProductHeader } from '../../components/NewProductHeader'
import { Footer } from '../../components/Footer'

export function NewProduct() {
  return (
    <Container>
      <NewProductHeader />
      <Footer />
    </Container>
  )
}