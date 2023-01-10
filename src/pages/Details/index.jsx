import { Container, ContentLeft, ContentRight } from './styles'

//Components	
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

//Icons
import { HiOutlineChevronLeft } from 'react-icons/hi'


export function Details() {
  return (
    <Container>
      
      <Header />

        <ContentLeft>
          <div className='back-link'>
            <HiOutlineChevronLeft />
            <span>voltar</span>
          </div>
        </ContentLeft>

        <ContentRight>
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
        </ContentRight>

      <Footer />  

    </Container>
  )
}

