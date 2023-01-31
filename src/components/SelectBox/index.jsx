import { Container } from "./styles";

import { BsChevronDown } from 'react-icons/bs'

import Select from 'react-select'



export function SelectBox({ status }) {
  const options = [
    { value: 'pendente', label: 'Pendente' },
    { value: 'preparando', label: 'Preparando' },
    { value: 'entregue', label: 'Entregue' }
  ]

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

  return (
    <Container>
      <Select 
        options={ options }
        styles={ customStyles }
        placeholder={ status }
      />
    </Container>
  )
}