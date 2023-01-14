import { Container, Content, ContentLeft, ContentRight } from './styles'

//Components	
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredients } from '../../components/Ingredients'
import { NumberInput } from '../../components/NumberInput'

//Icons
import { TbReceipt } from 'react-icons/tb'
import { HiOutlineChevronLeft } from 'react-icons/hi'

//Image example
import imageMask from '../../assets/miniatures/dishes/bolo_de_damasco.png'


export function Details() {
  return (
    <Container>
      
      <Header />

      <div className='back-link'>
        <HiOutlineChevronLeft />
        <span>voltar</span>
      </div>

      <Content>

        <ContentLeft>
          <img src={ imageMask } alt="" />
        </ContentLeft>

        <ContentRight>
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e milho agridoce salpicados com gergelim</p>
        
          <Ingredients />

          <div className="price-quantity">
            <span>R$ 25,97 </span>
            <NumberInput />
          </div>

        </ContentRight>

      </Content> 


      <Footer />  

    </Container>
  )
}

