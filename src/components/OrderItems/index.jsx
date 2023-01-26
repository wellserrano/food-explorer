import { Container, Row, Delete, Total, Rows} from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function OrderItems({ data, total }) {
  const { dropItem } = useAuth();

  const dataExists = data.length > 0;

  function handleItemRemove(itemId) {
    dropItem(itemId)
    window.location.reload();
  }

  return (
    <Container>
      <Rows>
        {
          data &&
          data.map((item, i) =>{
            return (  
            <Row key={`${item.name}-${i}`}>
              <img src={ `${api.defaults.baseURL}/files/${item.image}` } alt="" />

              <div className="in-column">

                <div className="in-line">

                  <p>{item.quantity} x&nbsp;&nbsp;&nbsp;{item.name}</p>
                  <span>R$ {item.price}</span>

                </div>

                <Delete onClick={() => handleItemRemove(item.id) }> Excluir </Delete>
              </div>
            </Row>)
            })
        }
        
        
      </Rows>
   

      <Total>
        <span>Total: R$ { total }</span>
      </Total>

    </Container>
  )
}