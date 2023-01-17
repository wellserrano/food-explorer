import { Container } from './styles'

import { api } from '../../services/api'


export function Ingredients({ data }) {

  return (
    <Container>

      {
        data &&
        data.map( (element, index) => 
          {
            const imageIngredientURL = `${api.defaults.baseURL}/assets/ingredients/${ element }.png`
            
            return (
              <div key={ index } className="ingredient">
                <img src={ imageIngredientURL } alt="" />
                <span>{ element }</span>
              </div>
            );
          })
      }

    </Container>
  )
}