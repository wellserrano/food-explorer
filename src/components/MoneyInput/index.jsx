import { Container, Label } from "./styles";
import { useState } from "react";


export function MoneyInput({ caption="", prefix="" }) {
  const [price, setPrice] = useState('');

  function handlePriceValue(entry) {

    //Accepts only numbers
    let formattedValue = entry.replace(/\D/g, "")

    //Add comma "," for decimals
    formattedValue = formattedValue.replace(/(\d)(\d{2})$/, "$1,$2")

    //Add dot "." for thousands separator
    formattedValue = formattedValue.replace(/(?=(\d{3})+(\D))\B/g, ".")

    setPrice(formattedValue)
  }

  return (
    <Container>
      <Label>
        { caption }
        <div className="wrapper">
          { prefix && <span>{ prefix }</span>}
          <input 
            className="teste"
            type='text'
            value={ price }
            placeholder='0,00'
            onChange={ e => handlePriceValue(e.target.value) }
          />
        </div>
      </Label>
    </Container>
  )
}