import { Container, ContentLeft, ContentRight } from './styles'

//Components	
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredients } from '../../components/Ingredients'
import { NumberInput } from '../../components/NumberInput'

//Icons
import { TbReceipt } from 'react-icons/tb'
import { HiOutlineChevronLeft } from 'react-icons/hi'

//Image example
import imageMask from '../../assets/miniatures/Mask-group-1.png'


export function Details() {
  return (
    <Container>
      
      <Header />

        <ContentLeft>
          <div className='back-link'>
            <HiOutlineChevronLeft />
            <span>voltar</span>
          </div>

          <img src={ imageMask } alt="" />
        </ContentLeft>

        <ContentRight>
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e milho agridoce salpicadOs com gergelim</p>
          
          <Ingredients />

          <div className="price-quantity">
            <span>R$ 25,97 </span>
            <NumberInput />
          </div>

        </ContentRight>


      <Footer />  

    </Container>
  )
}

