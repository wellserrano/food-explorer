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
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
        <Card
          key={2}
          data={{
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
        <Card
          key={3}
          data={{
            title: 'Torradas de Parma',
            description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
            price: String(25.97)
          }}
          />
      </Dishes>
    </Container>
  )
}