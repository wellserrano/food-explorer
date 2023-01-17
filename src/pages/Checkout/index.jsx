import { Container, Items, Payment } from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItems } from '../../components/OrderItems'
import { PaymentMethod } from '../../components/PaymentMethod'

export function Checkout() {
  return (
    <Container>
      <Header />

      <Items>
        <h2>Meu Pedido</h2>
        <OrderItems />
      </Items>

      <Payment>
        <h2>Pagamento</h2>
        <PaymentMethod></PaymentMethod>
      </Payment>

      <Footer />
    </Container>

  )
    
};
