import { Container, Dishes } from './styles'

import { Card } from '../Card'
import React, { useEffect, useState, useRef } from 'react'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { ScrollButton } from '../ScrollButton'

export function Carousel ({ title, category, searchData, ...rest }) {
  const [data, setData] = useState([])

  const dishesRef = useRef(null)

  const { user } = useAuth()

  function moveRight () {
    dishesRef.current.scrollLeft = dishesRef.current.scrollLeft - 350
  };

  function moveLeft () {
    dishesRef.current.scrollLeft = dishesRef.current.scrollLeft + 350
  };

  useEffect(() => {
    async function fetchDishesData () {
      let response

      if (category === 'search') {
        return setData(searchData)
      }

      if (category === 'favoritos') {
        response = await api.get(`/favorites/?id=${user.id}`)
      } else {
        response = await api.get(`/dishes?category=${category}`, {
          params: { user_id: user.id }
        })
      }

      setData(response.data)
    }

    fetchDishesData()
  }, [])

  return (
    <Container {...rest}>
        <h3>{ title }</h3>
          <div className="dishes-container">

            <ScrollButton onClick={ moveLeft } direction='left'/>

            <Dishes ref={ dishesRef }>
              {
                data &&
                data.map((dish, i) => {
                  return (
                  <Card
                    key={`${dish.name}-${i}`}
                    data={{
                      title: dish.name,
                      description: dish.description,
                      price: String(dish.price.toFixed(2)),
                      product_id: dish.id,
                      image: dish.image,
                      favorite_id: dish.favorite_id
                    }}
                  />
                  )
                })
              }
            </Dishes>

            <ScrollButton onClick={ moveRight } direction='right'/>

          </div>
    </Container>
  )
}
