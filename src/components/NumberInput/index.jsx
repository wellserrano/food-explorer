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
    if (!quantity) { 

      return

    } else {

      const item = {
        product_id,
        quantity
      }


      const currentCart = localStorage.getItem("@foodexp:cart") ?? [];
      
      if (currentCart.length > 0) {
        const arrayCurrentCart = JSON.parse(currentCart);
        
        const updatedData = arrayCurrentCart.find(obj => obj.product_id === item.product_id) ?? false
        
        if (updatedData) {
          console.log('mexi em algo que já tinha', updatedData)
          updatedData.quantity = item.quantity
          arrayCurrentCart.push(updatedData)
        
        } else {
          arrayCurrentCart.push(item)
        }

        
        localStorage.setItem("@foodexp:cart", JSON.stringify(arrayCurrentCart))
        
      } else {
        const arrayItems = new Array();
        arrayItems.push(item)
        localStorage.setItem("@foodexp:cart", JSON.stringify(arrayItems))
    
      }

    
    }
    
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