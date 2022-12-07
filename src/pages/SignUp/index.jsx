import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { api } from '../../services/api'
import { useState } from 'react';

import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

export function SignUp() {
  const [name, setName ]          = useState('')
  const [email, setEmail ]        = useState('')
  const [password, setPassword ]  = useState('');



  function HandleSignUp() {
    api.post('/users', {
        name,
        email,
        password
      })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
      })
      .catch( error => {

        if (error.response) {
          alert(error.response.data.message);
        } else {
          console.error(error)
          alert("Não foi possível cadastrar o usuário");
        }

      })

    };


  return (
    <Container>
      
      <h1>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        
        food.exp
      </h1>

      <Form>
        <h2>Crie sua conta</h2>

        <TextInput 
          caption='Seu nome' 
          placeholder='Maria da Silva'
          onChange={e => setName(e.target.value) }
        />
        <TextInput 
          caption='Email' 
          placeholder='exemplo@exemplo.com.br'
          onChange={e => setEmail(e.target.value) }
        />
        <TextInput 
          caption='Senha' 
          placeholder='Mínimo 6 caracteres'
          type='password'
          onChange={e => setPassword(e.target.value) }
        />
        
        <Button 
          onClick={HandleSignUp}
          title="Criar conta"
        />

        <Link to='/signin'>Já tenho uma conta</Link>

      </Form>
    </Container>
  )
}
