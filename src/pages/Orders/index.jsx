import { Container, Table } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SelectBox } from '../../components/SelectBox'

export function Orders() {
  return (
    <Container>
      
      <Header />

        <Table>

          <h1>Pedidos</h1>

          <table>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e Hora</th>
            </tr>
            {/* VISÃO ADMIN */}
            <tr>
              <td> <SelectBox /> </td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 18h00</td>
            </tr>
            <tr>
            <td> <SelectBox /> </td>
              <td>00000003</td>
              <td>1 x Salada Radish, 1 x Tors de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 18h00</td>
            </tr>
            <tr>
              <td> <SelectBox /> </td>
              <td>00000002</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 18h00</td>
            </tr> 

            {/* VISÃO USUÁRIO */}
            {/* <tr>
              <td><span>&#x25CF;</span> Pendente</td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 18h00</td>
            </tr>
            <tr>
              <td><span>&#x25CF;</span> Preparando</td>
              <td>00000003</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 18h00</td>
            </tr>
            <tr>
              <td><span>&#x25CF;</span> Entregue</td>
              <td>00000002</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 18h00</td>
            </tr> */}

          </table>

        </Table>

      <Footer />

    </Container>
  )
}