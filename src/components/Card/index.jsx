import { Container, Money, Test } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { FiHeart } from 'react-icons/fi'

import { NumberInput } from '../NumberInput'

import imgTest from '../../assets/miniatures/dishes/bolo_de_damasco.png'


export function Card({ data, ...rest }) {
  const navigate = useNavigate();

  function handleFavorite() {
    console.log(data)
  }

  function handleProductDetails(id) {

    navigate(`/products/${id}`)
  }

  return (
    <Container { ...rest }>
      <div className="favorite">
        <FiHeart 
          onClick={handleFavorite}
        />
      </div>

      <main>
       
        <Test onClick={() => handleProductDetails(1)}>
          <img src={ imgTest } alt="" />
          <p className="dish-name">{ data.title } &gt; </p>
        </Test> 

        <p className="dish-description">{ data.description }</p>
        <Money>
          <span>R$ </span>{ data.price.replaceAll('.', ',') }
        </Money>
      </main>
        <NumberInput />
      
    </Container>
  )
}

