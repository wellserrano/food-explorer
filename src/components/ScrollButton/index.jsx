import { Container, Button } from './styles'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export function ScrollButton({direction, ...rest}) {
  return (
    <Container direction={direction} {...rest}>
      <Button>
          {
            direction === 'right' ? 
            <AiOutlineRight style={{color: 'white', fontSize: '2.75rem'}} /> 
            :
            <AiOutlineLeft style={{color: 'white', fontSize: '2.75rem'}} />             
          }
      </Button>
    </Container>
  )
}