import { Container, Option, Method } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

import { TbReceipt } from 'react-icons/tb'
import { FiCheckCircle } from 'react-icons/fi'
import Receipt from '../../assets/Receipt.svg';
import { HiOutlineClock } from 'react-icons/hi'
import sampleQR from '../../assets/qrcode 1.png'
import ForkKnife from '../../assets/forknife.svg';

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function PaymentMethod({ orderInfo }) {
  const [pixButton, setPixButton] = useState(false)
  const [creditButton, setCreditButton] = useState(false)
  const [message, setMessage] = useState('Aguardando pagamento no caixa')

  const [cvc, setCvc] = useState('');
  const [creditNumber, setCreditNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const { dropCart } = useAuth();

  const navigate = useNavigate();

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

  async function handleFinishPayment() {
    if (!creditNumber || !expirationDate || !cvc) return alert('Preencha todos os campos');

    const { user_id, items, total } = orderInfo;
    
    const response = await api.post('/checkout', { user_id, total });
    
    await api.post('/orders', {order_id: response.data[0], items});
    
    setCvc('')
    setCreditNumber('')
    setExpirationDate('');

    dropCart();

    navigate(-1)

    alert('pedido registrado com sucesso');
  }


  function handleCreditNumber(e) {
    const maskCreditCardNumber = ((value) => {
      let formattedValue = value.replace(/\D/g, "");
      formattedValue = formattedValue.replace(/(\d{4})/g, "$1  ");

      if(formattedValue.length > 24) {
        formattedValue = formattedValue.substring(0,24);
      }
      
      return formattedValue.trim();
    })(e.target.value);

    setCreditNumber(maskCreditCardNumber)

  }

  function handleExpirationDate(e) {
    
    const maskExpirationDate = ((value) => {
      let formattedValue = value.replace(/\D/g, "");
      
      if(formattedValue.length > 3) {
        const isDateValid = formattedValue.match(/(0[0-9]|1[0-2])([0-9]{2})/g)

        if (isDateValid) {
          formattedValue = formattedValue
            .replace(/(0[0-9]|1[0-2])([0-9]{2})/g, "$1/$2")
            .trim()
            .substring(0,5);
        } else {
          alert('Confira se a data inserida está no padrão Mês/Ano (MM/YY)')
          return ''
        }
      }
      
      return formattedValue
    })(e.target.value);
    
    setExpirationDate(maskExpirationDate)
  }

  function handleCvc(e) {
    let formattedValue = e.target.value;
    formattedValue = formattedValue.replace(/\D/g, "");
    
    setCvc(formattedValue)

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
                value={ cvc }
                onChange={ handleCvc }
                maxLength={3}
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