import { Container } from "./styles";

export function SelectBox() {
  return (
    <Container>
      <select name="status">
        <option value="hold">
          <span>&#x25CF;</span> Pendente
        </option>
        <option value="processing">
          <span>&#x25CF;</span> Preparando
        </option>
        <option value="done">
          <span>&#x25CF;</span> Entregue
        </option>
      </select>
    </Container>
  )
}