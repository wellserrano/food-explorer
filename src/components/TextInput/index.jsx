import { Container, Label } from './styles'

export function TextInput({caption='', ...rest }) {
  return (
    <Container>
      <Label>
        { caption }
        <input 
          type='text'
          {...rest}
        />
      </Label>
    </Container>
  )
}