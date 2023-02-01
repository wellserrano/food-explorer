import { Container, Items, Payment } from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItems } from '../../components/OrderItems'
import { PaymentMethod } from '../../components/PaymentMethod'

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function OrderDetails() {
  const [total, setTotal] = useState(0)
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')
  const [itemsData, setItemsData] = useState([]);
  
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const { order_id } = location.state

    async function fetchDetails() {
      const response = await api.get(`/orders/details?id=${order_id}`)

      setTotal(response.data.total)
      setItemsData(response.data.items);
      
      const status = response.data.status;
      switch (status) {
        case 'Pendente':
          setMessage('Aguardando pagamento no caixa')
          break;
        case 'Preparando':  
          setMessage('Pagamento aprovado!')
          break;
        case 'Entregue':  
          setMessage('Pedido entregue!')
          break;
      }

      setStatus(status);
    }

    fetchDetails();    
    
  }, [])

  return (
    <Container>
      <Header />

      <Items>
        <h2>Meu Pedido</h2>
        <OrderItems data={ itemsData } total={ total } status={ status } />
      </Items>

      <Payment>
        <h2>Pagamento</h2>
        <PaymentMethod 
          orderInfo={{
            user_id: user.id,
            items: itemsData.map(item => { const {id: product_id, quantity} = item; return {product_id, quantity}}),
            message,
            total
          }}
          
        />
      </Payment>

      <Footer />
    </Container>

  )
    
};
