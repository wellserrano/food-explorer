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

//Hooks
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



export function Products() {
  const [data, setData] = useState({})

  const params = useParams();

  useEffect(() => {
    async function fetchProductDetails(req, res) {
      
      const response = await api.get(`/products?product_id=${params.product_id}`)

      const { name, price, description, image } = response.data[0];

      const imageView = URL.createObjectURL(image);

      console.log(imageView)

      setData({
        name,
        price,
        description,
        image: imageView
      })
      
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
          <img src={ data.image }  alt="" />
        </ContentLeft>

        <ContentRight>
          <h2>{ data.name }</h2>
          <p>{ data.description }</p>
        
          <Ingredients />

          <div className="price-quantity">
            <span>R$ { data.price } </span>
            <NumberInput />
          </div>

        </ContentRight>

      </Content> 


      <Footer />  

    </Container>
  )
}

