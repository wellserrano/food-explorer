import { Container, ChangeButton, Quantity } from './styles'

import { FiPlus, FiMinus } from 'react-icons/fi'

import { useState } from 'react';

import { Button } from '../Button'

export function NumberInput({ product_id, ...rest }) {
  const [quantity, setQuantity] = useState(0);
  const [animatePlus, setAnimatePlus] = useState(false);
  const [animateMinus, setAnimateMinus] = useState(false);

  function handleRemove() {
    if (quantity > 0) {
      setQuantity(prevState => prevState -1 )
      setAnimateMinus(true)
    }
  }

  function handleAdd() {
    setQuantity(prevState => prevState +1 )
    setAnimatePlus(true)
  }

  function handleCart() {
    if (!quantity) return;
    
    const item = { product_id, quantity };
    const cart = JSON.parse(localStorage.getItem("@foodexp:cart")) || [];
    
    const index = cart.findIndex(i => i.product_id === item.product_id);
    if (index !== -1) {
      cart[index].quantity = quantity;
    } else {
      cart.push(item);
    }
  
    localStorage.setItem("@foodexp:cart", JSON.stringify(cart));
    setQuantity(0)
    
  };

  return(
    <Container>

      <ChangeButton onClick={ handleRemove }>
        <FiMinus className={ animateMinus ? 'animation-click' : ''} onAnimationEnd={() => setAnimateMinus(false)} />
      </ChangeButton>

      <Quantity 
        type="Number"
        placeholder={0}
        value={ quantity }
        readOnly={ true }
        { ...rest } 
      />

      <ChangeButton onClick={ handleAdd }>
        <FiPlus className={ animatePlus ? 'animation-click' : ''} onAnimationEnd={() => setAnimatePlus(false)} />  
      </ChangeButton>

      <Button 
        title="incluir" { ...rest }
        onClick={ handleCart }
      />

    </Container>
  )
}