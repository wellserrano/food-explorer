import { Container, Label } from './styles'

export function TextInput({caption='', type='text', ...rest }) {
  return (
    <Container>
      <Label>
        { caption }
        <input 
          type={ type }
          {...rest}
        />
      </Label>
    </Container>
  )
}