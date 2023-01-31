import { Container, Items, Payment } from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItems } from '../../components/OrderItems'
import { PaymentMethod } from '../../components/PaymentMethod'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Checkout() {
  const [itemsData, setItemsData] = useState([])
  const [total, setTotal] = useState(0);
  
  const { fetchOrderedItems, user } = useAuth();

  const navigate = useNavigate();


  useEffect(() => {
    const itemStorage = fetchOrderedItems() || [];

    if (itemStorage.length) {
      async function fetchItemDetails() {
        const response = await api.get('/checkout', { params: { products: itemStorage }})

        setItemsData(response.data);

        const totalPrice = response.data.reduce(((accumulator, currentValue) => 
        accumulator + (currentValue['price'] * currentValue['quantity'])), 0)

        
        setTotal(totalPrice.toFixed(2))

      }

      fetchItemDetails();
    } else {
      navigate("/")
    }
  }, [])

  return (
    <Container>
      <Header />

      <Items>
        <h2>Meu Pedido</h2>
        <OrderItems data={ itemsData } total={ total }/>
      </Items>

      <Payment>
        <h2>Pagamento</h2>
        <PaymentMethod 
          orderInfo={{
            user_id: user.id,
            items: itemsData.map(item => { const {id: product_id, quantity} = item; return {product_id, quantity}}),
            total
          }}
        />
      </Payment>

      <Footer />
    </Container>

  )
    
};
