import { Container, Row, Delete, Total, Rows} from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function OrderItems({ data }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {

    const totalPrice = data.reduce((accumulator, currentValue) => accumulator + currentValue['price'], 0)

    setTotal(totalPrice)

  }, [])

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
        <span>Total: R$ { total }</span>
      </Total>

    </Container>
  )
}