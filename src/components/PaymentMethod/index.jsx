import { Container, Option, Method } from "./styles";

import { useState } from "react";

import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

import { TbReceipt } from 'react-icons/tb'
import { FiCheckCircle } from 'react-icons/fi'
import { HiOutlineClock } from 'react-icons/hi'
import sampleQR from '../../assets/qrcode 1.png'
import Receipt from '../../assets/Receipt.svg';
import ForkKnife from '../../assets/forknife.svg';


export function PaymentMethod() {
  const [pixButton, setPixButton] = useState(false)
  const [creditButton, setCreditButton] = useState(false)
  const [message, setMessage] = useState('Aguardando pagamento no caixa')

  const [creditNumber, setCreditNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('000');

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

  function handleFinishPayment() {
    return;
  }


  function handleCreditNumber(e) {
    const maskCreditCardNumber = ((value) => {
      let formattedValue = value.replace(/\D/g, "");
      formattedValue = formattedValue.replace(/(\d{4})/g, "$1 ");

      if(formattedValue.length > 20) {
        formattedValue = formattedValue.substring(0,20);
      }
      
      return formattedValue.trim();
    })(e.target.value)

    setCreditNumber(maskCreditCardNumber)
  }

  function handleExpirationDate(e) {
    const maskExpirationDate = ((value) => {
      const formattedValue = new RegExp(/^(0[1-9]|1[0-2])\/([0-9]{2})$/);
      return formattedValue;
    })(e.target.value)

    setExpirationDate(maskExpirationDate)
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
            <TextInput 
              id="credit-card-number" 
              placeholder="0000 0000 0000 0000"
              value={ creditNumber }
              onChange={ handleCreditNumber }
            />
          </label>
          
          <div className="in-line">
            <label htmlFor="valid">
              Validade
              <TextInput 
                id="valid" 
                placeholder="11/28"
                value={ expirationDate }
                onChange={ handleExpirationDate }
              />
            </label>
            <label htmlFor="CVC">
              CVC
              <TextInput 
                id="CVC" 
                placeholder="123"
                onChange={e => setCvc(e.target.value)}
              />
            </label>
          </div>

          <Button 
            type="button"
            title="Finalizar pagamento"
            icon={ TbReceipt }
            onClick={ handleFinishPayment }
          />

        </Method>
        
      }

    </Container>
  )
}