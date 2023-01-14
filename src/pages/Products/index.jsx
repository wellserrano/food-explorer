import { Container, Content, ContentLeft, ContentRight } from './styles'

import { api } from '../../services/api'

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

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export function Products() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchProductDetails(req, res) {

      console.log('teste')
      
      const response = await api.get(`/products?product_id=${params.product_id}`)
      
      console.log(response.data);
    }

    fetchProductDetails();

  }, [])

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
          <h2>{ name }</h2>
          <p>{ description }</p>
        
          <Ingredients />

          <div className="price-quantity">
            <span>R$ { price } </span>
            <NumberInput />
          </div>

        </ContentRight>

      </Content> 


      <Footer />  

    </Container>
  )
}

