import { Container, Row, Delete, Total, Rows} from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function OrderItems({ data, total, status }) {
  const { dropItem } = useAuth();

  function handleItemRemove(itemId) {
    console.log(data)
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

                {
                  status === 'Pendente' &&
                  <Delete 
                    onClick={() => handleItemRemove(item.id) }
                  > 
                    Excluir 
                  </Delete>
                }
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