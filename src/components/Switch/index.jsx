import { Container, DarkModeSwitch } from './styles'

export function Switch({ ...rest }) {
  return (
    <Container>
      <DarkModeSwitch defaultChecked {...rest} />
    </Container>
  )
}
