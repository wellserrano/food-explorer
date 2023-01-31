import { Container } from "./styles";

import Select from 'react-select'
import { useState } from "react";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor:'#010A0F',
  }),
  
  option: (provided, state) => ({
    ...provided,
    color: `${ ({ theme }) => theme.COLORS.WHITE2 }`,
    backgroundColor:'#010A0F',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: `${ ({ theme }) => theme.COLORS.WHITE1 }`
  })

};

export function SelectBox({ status, order }) {
  const [selectedOption, setSelectedOption] = useState({ value: status, label: status });
  const options = [
    { value: 'Pendente', label: 'Pendente' },
    { value: 'Preparando', label: 'Preparando' },
    { value: 'Entregue', label: 'Entregue' }
  ]

  const { user } = useAuth();
  const isAdmin = user.admin;

  async function handleStatusChange(newOption) {
    setSelectedOption(newOption)
    
    await api.put(`/orders?order_id=${order}&status=${newOption.value}`)
  }

  return (
    <Container>
      <Select 
        value={ selectedOption }
        styles={ customStyles }
        options={ options }
        placeholder={ selectedOption }
        onChange={ handleStatusChange }
        isDisabled={ !isAdmin }
      />
    </Container>
  )
}