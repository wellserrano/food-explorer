import { Container, Money } from "./styles";

import { FiHeart } from 'react-icons/fi'

import { NumberInput } from '../NumberInput'

import imgTest from '../../assets/miniatures/Maskgroup-5.png'


export function Card({ data, ...rest }) {

  function handleFavorite() {
    console.log(data)
  }


  return (
    <Container { ...rest }>
      <div className="favorite">
        <FiHeart 
          onClick={handleFavorite}
        />
      </div>
      <main>
        <img src={ imgTest } alt="" />
        <p className="dish-name">{ data.title } &gt; </p>
        <p className="dish-description">{ data.description }</p>
        <Money>
          <span>R$ </span>{ data.price.replaceAll('.', ',') }
        </Money>
      </main>
        <NumberInput placeholder="0"/>
      
    </Container>
  )
}