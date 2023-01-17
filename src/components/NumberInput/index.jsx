import { Container, ChangeButton, Quantity } from './styles'

import { FiPlus, FiMinus } from 'react-icons/fi'

import { useState } from 'react';

import { Button } from '../Button'

export function NumberInput({ product_id, ...rest }) {
  const [quantity, setQuantity] = useState(0);


  function handleRemove() {
    if (quantity > 0) {
      setQuantity(prevState => prevState -1 )

    }
  }

  function handleAdd() {
    setQuantity(prevState => prevState +1 )
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
    
  };

  return(
    <Container>

      <ChangeButton onClick={ handleRemove }>
        <FiMinus />
      </ChangeButton>

      <Quantity 
        type="Number"
        placeholder={0}
        value={ quantity }
        readOnly={ true }
        { ...rest } 
      />

      <ChangeButton onClick={ handleAdd }>
        <FiPlus />  
      </ChangeButton>

      <Button 
        title="incluir" { ...rest }
        onClick={ handleCart }
      />

    </Container>
  )
}