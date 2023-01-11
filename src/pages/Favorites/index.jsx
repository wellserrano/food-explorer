import { Container, Content } from './styles'

//Components	
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

export function Favorites() {
  return (
    <Container>
      <Header />
      
      <Content>

        <Carousel
          title='FAVORTITOS'
        />

      </Content>

      <Footer />

      
    </Container>
  )
}

