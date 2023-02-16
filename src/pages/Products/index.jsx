import { Container, Content, ContentLeft, ContentRight } from './styles'

import { api } from '../../services/api'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredients } from '../../components/Ingredients'
import { NumberInput } from '../../components/NumberInput'

// Icons
import { TbReceipt } from 'react-icons/tb'
import { HiOutlineChevronLeft } from 'react-icons/hi'

// Hooks
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function Products () {
  const [data, setData] = useState({})

  const navigate = useNavigate()
  const params = useParams()

  function handleBack () {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchProductDetails () {
      const response = await api.get(`/products?product_id=${params.product_id}`)

      const { name, price, description, ingredients, image } = response.data

      const imageDishURL = `${api.defaults.baseURL}/files/${image}`

      setData({
        name,
        price,
        description,
        ingredients,
        image: imageDishURL
      })
    }

    fetchProductDetails()
  }, [])

  return (
    <Container>

      <Header productsDetails={{ ...data, product_id: Number(params.product_id) }}/>

      <div className='back-link' onClick={ handleBack }>
        <HiOutlineChevronLeft />
        <span>voltar</span>
      </div>

      <Content>

        <ContentLeft>
          <img src={ data.image } alt="" />
        </ContentLeft>

        <ContentRight>
          <h2>{ data.name }</h2>
          <p>{ data.description }</p>

          <Ingredients data={ data.ingredients } />

          <div className="price-quantity">
            <span>R$ { Number(data.price).toFixed(2) } </span>
            <NumberInput product_id={ Number(params.product_id) } />
          </div>

        </ContentRight>

      </Content>

      <Footer />

    </Container>
  )
}
