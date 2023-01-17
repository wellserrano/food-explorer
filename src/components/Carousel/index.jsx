import { Container, Dishes, LeftArrowButton, RightArrowButton } from "./styles";
import { Card } from "../Card";
import { useState } from "react";


export function Carousel({ title, ...rest }) {
const [ scrollVal, setScroll ] = useState(0)

  const dishesData = [
    {id: 1, title: 'Torradas de Parma1', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },
    {id: 2, title: 'Torradas de Parma2', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },
    {id: 3, title: 'Torradas de Parma3', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },
    {id: 4, title: 'Torradas de Parma4', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },
    {id: 5, title: 'Torradas de Parma4', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },
    {id: 6, title: 'Torradas de Parma4', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },
    {id: 7, title: 'Torradas de Parma4', description: 'Presunto de parma e rúcula em um pão com fermentação natural.', price: 25.97 },

  ]
  
   const cardsTotal = dishesData.length
   
  function clickBtn(a, b){
    console.log('clickbtn', scrollVal)
    
    let x = scrollVal + 15

    setScroll(x)
    document.getElementById('TheDishes').scrollLeft += 20;


  }

  if (cardsTotal < 4) {
    return (
      <Container>
        <p>{ title }</p>
        <Dishes>
        { dishesData.map( card => {
           return (<Card key={card.id} cardsTotal={cardsTotal} data={{
                    title: card.title,
                    description: card.description,
                    price: String(card.price)
          }} />)})
        }
        </Dishes>
      </Container>)
  }
  else{
    return (
      <Container scrollLeft={scrollVal}>
        <p>{ title }</p>
        
        <Dishes id='TheDishes' >
        {
          dishesData.map( (card, idx) => {
            // if ( idx == 0 || idx == cardsTotal-1 ) return 
            return (<Card className='carousel-card-middle' key={card.id} cardsTotal={cardsTotal} data={{
              title: card.title,
              description: card.description,
              price: String(card.price)
            }} /> )
          })
        }
        </Dishes>
        <div className="carousel-arrows-container">
              <LeftArrowButton  onClick={() => clickBtn(33)} >.-</LeftArrowButton>
              <RightArrowButton onClick={() => clickBtn(33)} >-.</RightArrowButton>
          </div>
      </Container>
    )
  }


    
}