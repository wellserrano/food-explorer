import { Container, Money, ProductHeader } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from 'react'

import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

import { NumberInput } from '../NumberInput'

import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

export function Card({ data, ...rest }) {
  const [isFavorite, setIsFavorite] = useState(data.favorite_id > 0)
  const { user } = useAuth();
  
  const navigate = useNavigate();

  const imageDishURL = `${api.defaults.baseURL}/files/${ data.image }`

  async function handleFavorite() {
    setIsFavorite(!isFavorite)

    if (isFavorite) {
      await api.delete(`/favorites?id=${data.favorite_id}`)
      data.favorite_id = null;
    } else {
      const favoriteId = await api.post('/favorites', {favoriteInfo: { user_id: user.id, product_id: data.product_id }})
      data.favorite_id = favoriteId.data;
    }
  }

  function handleProductDetails(id) {
    navigate(`/products/${id}`)
  }

  return (
    <Container { ...rest }>
      <div className="favorite">
        <div onClick={ handleFavorite }>
          {
          isFavorite 
          ? <FaHeart className="animation-pop-in"/> 
          : <FiHeart className="animation-pop-in"/> 
          }
        </div>
      </div>

      <main>
        <ProductHeader onClick={ () => handleProductDetails(data.product_id) }>
          <img src={ imageDishURL } alt="" />
          <p className="dish-name">{ data.title } &gt; </p>
        </ProductHeader> 

        <p className="dish-description">{ data.description }</p>
        <Money>
          <span>R$ </span>{ data.price.replaceAll('.', ',') }
        </Money>
      </main>

      <NumberInput product_id={ data.product_id } />
      
    </Container>
  )
}

