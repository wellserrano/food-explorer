import { Container, Dishes } from "./styles";

// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { Card } from "../Card";
import { useEffect, useState } from "react";

import { api } from '../../services/api'

import { ScrollButton } from "../ScrollButton";


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
    <Container>
        <h3>{ title }</h3>
          <div className="dishes-container">
            {
              <ScrollButton direction='left'/>
            }
              <Dishes>
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
            {           
              <ScrollButton direction='right'/>
            } 
          </div>
    </Container>
  )
   



// last try:
// return (
//   <Container>
//       <h3>{ title }</h3>
//       <div className="dishes-container">
//         {
//           data.length > 4 &&
//           <div className="button-scroll-container">
//             <LeftArrowButton  onClick={() => clickBtn(33)} > <AiOutlineRight style={{color: 'white', fontSize: '2.75rem'}} /> </LeftArrowButton>
//           </div>
//         }
//         <Dishes>
//           {
//             data &&
//             data.map( dish => (
//               <Card 
//               data={{
//                 title:          dish.name,
//                 description:    dish.description,
//                 price:          String(dish.price),
//                 product_id:     dish.product_id,
//                 image:          dish.image,
//               }}
//               />
//               ))
//             }
//         </Dishes>
//         {
//           data.length > 4 &&
//           <div className="button-scroll-container">
//             <RightArrowButton onClick={() => clickBtn(33)} > <AiOutlineLeft style={{color: 'white', fontSize: '2.75rem'}} /> </RightArrowButton>
//           </div>
//         }
//       </div>
//   </Container>
// )

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