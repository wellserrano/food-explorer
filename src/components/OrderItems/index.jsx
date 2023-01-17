import { Container, Row, Delete, Total, Rows} from "./styles";

import sampleImg from '../../assets/miniatures/dishes/bolo_de_damasco.png'

export function OrderItems() {
  return (
    <Container>
      <Rows>
        <Row>
          <img src={ sampleImg } alt="" />

          <div className="in-column">

            <div className="in-line">

              <p>1 x&nbsp;&nbsp;&nbsp;Salada Radish</p>
              <span>R$ 25,82</span>

            </div>

            <Delete> Excluir </Delete>
          </div>
        </Row>
        
      </Rows>
   

      <Total>
        <span>Total: R$ 105,30</span>
      </Total>

    </Container>
  )
}