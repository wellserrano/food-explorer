import { Container } from './styles'

export function SearchInput({ icon: Icon, ...rest }) {
  return (
    <Container { ...rest }>
      { Icon && <Icon /> }
      <input
        type="text"
        placeholder="Busque pelas opções de prato"
      />
    </Container>
  )
}