import { Container } from './styles'

import { api } from '../../services/api'


export function Ingredients({ data }) {

  const imageIngredientURL = `${api.defaults.baseURL}/assets/ingredients/`

  return (
    <Container>

      {
        data &&
        data.map( element => 
          {
            const imageIngredientURL = `${api.defaults.baseURL}/assets/ingredients/${ element }.png`
            
            return (
              <div className="ingredient">
                <img src={ imageIngredientURL } alt="" />
                <span>{ element }</span>
              </div>
            );
          })
      }

    </Container>
  )
}