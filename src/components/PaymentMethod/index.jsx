import { Container, Option, Method } from "./styles";

import { useState } from "react";

import sampleQR from '../../assets/qrcode 1.png'

export function PaymentMethod() {
  const [pixButton, setPixButton] = useState(false)
  const [creditButton, setCreditButton] = useState(false)
  
  return (
    <Container>
      
      <div className="options">
        <Option 
          isActive={ pixButton }
          onClick={() => {setPixButton(true); setCreditButton(false)}} >
            PIX
        </Option>
        <Option 
          isActive={ creditButton }
          onClick={() => {setCreditButton(true); setPixButton(false)}} >
          Crédito
        </Option>
      </div>
      
      {
        pixButton ?
        
        <Method>
          <div className="image-container">
            <img src={ sampleQR } alt="" />
          </div> 
        </Method>
        
        :
        
        <div className="credit-card-info">
          <label htmlFor="credit-card-number">
            Número do Cartão
            <input id="credit-card-number" type="number" />
          </label>
          <label htmlFor="valid">
            Validade
            <input id="valid" type="number" />
          </label>
          <label htmlFor="CVC">
            CVC
            <input id="CVC" type="number" />
          </label>
        </div>
        
      }

    </Container>
  )
}