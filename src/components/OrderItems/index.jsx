import { Container, Row, Delete, Total, Rows} from "./styles";
import { api } from "../../services/api";

export function OrderItems({ data }) {

  return (
    <Container>
      <Rows>
        {
          data &&
          data.map((item, i) =>  
            <Row key={`${item.product_id}-${i}`}>
              <img src={ `${api.defaults.baseURL}/files/${item.image}` } alt="" />

              <div className="in-column">

                <div className="in-line">

                  <p>{item.quantity} x&nbsp;&nbsp;&nbsp;{item.name}</p>
                  <span>R$ {item.price}</span>

                </div>

                <Delete> Excluir </Delete>
              </div>
            </Row>
          )
        }
        
        
      </Rows>
   

      <Total>
        <span>Total: R$ {data.total}</span>
      </Total>

    </Container>
  )
}