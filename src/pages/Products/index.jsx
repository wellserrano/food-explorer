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
  const [data, setData] = useState({});

  const params = useParams();

  useEffect(() => {
    async function fetchProductDetails() {
      
      const response = await api.get(`/products?product_id=${params.product_id}`)

      const { name, price, description, ingredients, image } = response.data;

      const imageDishURL = `${api.defaults.baseURL}/files/${image}`
      
      setData({
        name,
        price,
        description,
        ingredients,
        image: imageDishURL
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
        
          <Ingredients data={ data.ingredients } />

          <div className="price-quantity">
            <span>R$ { data.price } </span>
            <NumberInput product_id={ Number(params.product_id) } />
          </div>

        </ContentRight>

      </Content> 


      <Footer />  

    </Container>
  )
}

