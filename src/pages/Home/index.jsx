import { Container, Content } from './styles'

//Components	
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

import splashFruits from '../../assets/splashfruits.png'

export function Home() {
  return (
    <Container>
      <Header />

      
      <Content>
        <div className="fruits-panel">
          <img src={ splashFruits } alt="fruits in the air" />
          <div className="text-wrapper">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

      
        <Carousel
          title='Pratos principais'
        />

        <Carousel 
          title='Sobremesas'
        />

        <Carousel 
          title='Bebidas'
        />
      
      </Content>

      <Footer />

      
    </Container>
  )
}

