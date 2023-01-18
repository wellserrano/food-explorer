import { Container, Dishes, LeftArrowButton, RightArrowButton } from "./styles";

import { Card } from "../Card";
import { useEffect, useState } from "react";

import { api } from '../../services/api'


export function Carousel({ title, category, ...rest }) {

  const [ scrollVal, setScroll ] = useState(0)
  const [ data, setData ] = useState([]);


  useEffect(() => {
    
    async function fetchDishesData() {
      const response = await api.get(`/dishes?category=${category}`)
      setData(response.data)
    }

    fetchDishesData();
  }, []);

  return (
    <Container className="CONTAINER">
      <h3 className="TITLE">{ title }</h3>
        <Dishes className="DISHES">
          {
            data.length > 4 &&
            <div className="in-row">
              <LeftArrowButton  onClick={() => clickBtn(33)} >.-</LeftArrowButton>
              <RightArrowButton onClick={() => clickBtn(33)} >-.</RightArrowButton>
            </div>
          }
          {
            data &&
            data.map( dish => (
              <Card 
                data={{
                  title:          dish.name,
                  description:    dish.description,
                  price:          String(dish.price),
                  product_id:     dish.product_id,
                  image:          dish.image,
                }}
              />
            ))
          }
        </Dishes>
    </Container>
  )
   





  // function clickBtn(a, b){
  //   console.log('clickbtn', scrollVal)
    
  //   let x = scrollVal + 15

  //   setScroll(x)
  //   document.getElementById('TheDishes').scrollLeft += 20;


  // }

  // if (cardsTotal < 4) {
  //   return (
  //     <Container>
  //       <p>{ title }</p>
  //       <Dishes>
  //       { 
  //         dishesData.map( card => (
  //           <Card 
  //             key={card.teste} 
  //             cardsTotal={cardsTotal} 
  //             data={{
  //               product_id: card.teste,
  //               title: card.title,
  //               description: card.description,
  //               price: String(card.price)
  //             }} 
  //           />)
  //         )
  //       }
  //       </Dishes>
  //     </Container>)
  // }
  // else{
  //   return (
  //     <Container scrollLeft={scrollVal}>
  //       <p>{ title }</p>
        
  //       <Dishes id='TheDishes' >
  //       {
  //         dishesData.map( (card, idx) => {
  //           // if ( idx == 0 || idx == cardsTotal-1 ) return 
  //           return (<Card className='carousel-card-middle' key={card.id} cardsTotal={cardsTotal} data={{
  //             title: card.title,
  //             description: card.description,
  //             price: String(card.price)
  //           }} /> )
  //         })
  //       }
  //       </Dishes>
  //       <div className="carousel-arrows-container">
  //             <LeftArrowButton  onClick={() => clickBtn(33)} >.-</LeftArrowButton>
  //             <RightArrowButton onClick={() => clickBtn(33)} >-.</RightArrowButton>
  //         </div>
  //     </Container>
  //   )
  // }
}