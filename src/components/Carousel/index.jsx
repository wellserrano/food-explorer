import { Container, Dishes } from "./styles";

import { Card } from "../Card";

export function Carousel({ title, ...rest }) {
  return (
    <Container>
      <p>{ title }</p>

      <Dishes>
        <Card
          key={1}
          data={{
            product_id: 1,
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
        <Card
          key={2}
          data={{
            product_id: 2,
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
        <Card
          key={3}
          data={{
            product_id: 3,
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
        <Card
          key={4}
          data={{
            product_id: 4,
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
      </Dishes>
    </Container>
  )
}