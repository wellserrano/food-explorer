import { Container } from './styles'

//Images examples
import peach from '../../assets/miniatures/peach.png'
import radish from '../../assets/miniatures/radish.png'
import tomatoes from '../../assets/miniatures/tomatoes.png'
import passionfruit from '../../assets/miniatures/passionfruit.png'

export function Ingredients() {
  return (
    <Container>

      <div className="ingredient">
        <img src={ peach } alt="" />
        <span>pêssego</span>
      </div>

      <div className="ingredient">
        <img src={ radish } alt="" />
        <span>rabanete</span>
      </div>

      <div className="ingredient">
        <img src={ tomatoes } alt="" />
        <span>tomates</span>
      </div>

      <div className="ingredient">
        <img src={ passionfruit } alt="" />
        <span>maracujá</span>
      </div> 
    </Container>
  )
}