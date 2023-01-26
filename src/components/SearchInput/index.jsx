import { Container } from './styles'

export function SearchInput({ icon: Icon, handle, ...rest }) {
  return (
    <Container { ...rest }>
      { Icon && <Icon onClick={ handle }/> }
      <input
        type="text"
        placeholder="Busque pelas opções de prato"
      />
    </Container>
  )
}