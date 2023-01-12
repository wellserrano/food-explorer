import { Container, Option, Method } from "./styles";

import { useState } from "react";

import sampleQR from '../../assets/qrcode 1.png'

import { FiCheckCircle } from 'react-icons/fi'
import { HiOutlineClock } from 'react-icons/hi';
import ForkKnife from '../../assets/forknife.svg'

export function PaymentMethod() {
  const [pixButton, setPixButton] = useState(false)
  const [creditButton, setCreditButton] = useState(false)
  const [message, setMessage] = useState('Aguardando pagamento no caixa')

  function methodSelectionHandler(event) {
    const clickedButton = event.target.innerHTML;

    if (clickedButton === 'PIX') {

      setCreditButton(false)
      setPixButton(!pixButton)

    } else {

      setPixButton(false)
      setCreditButton(!creditButton)

    };
  };

  function imageHandler() {
    return ForkKnife
  }
  
  return (
    <Container>
      
      <div className="options">
        <Option 
          type="button"
          isActive={ pixButton }
          onClick={ methodSelectionHandler } >
            PIX
        </Option>
        <Option 
          type="button"
          isActive={ creditButton }
          onClick={ methodSelectionHandler } >
          Crédito
        </Option>
      </div>
      
      {
        !pixButton && !creditButton ?

        <Method className="message">
          <HiOutlineClock />
          <span>{ message }</span>
        </Method>

        :

        pixButton ?
        
        <Method className="pix-qr-container">
          <img src={ sampleQR } alt="" />
        </Method> 
        
        :
        
        <Method className="credit-card-info">
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
        </Method>
        
      }

    </Container>
  )
}