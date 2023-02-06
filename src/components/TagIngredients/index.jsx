import { Container } from './styles';

import { Tag } from '../Tag';

import { useEffect, useState } from 'react';

export function TagIngredients({ sendData, ingredientsProp }) {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  function handleAddIngredient() {
    if (!newIngredient) return;

    setIngredients( prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  };

  function handleDeleteIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  useEffect(() => {    
    return sendData(ingredients)
  }, [ingredients]);

  return (
    <Container> 
      {
        ingredientsProp.length ?

        ingredientsProp.map((ingredient, index) => (
          <Tag 
            key={ String(index) }
            value={ ingredient }
            onClick={() => handleDeleteIngredient(ingredient) }
          />
        ))
        
        : ingredients.map((ingredient, index) => (
          <Tag 
            key={ String(index) }
            value={ ingredient }
            onClick={() => handleDeleteIngredient(ingredient) }
          />
        ))
      }

      <Tag 
        placeholder="Adicionar"
        isNew
        value={ newIngredient }
        onClick={ handleAddIngredient }
        onChange={e => setNewIngredient(e.target.value)}
      />
      
    </Container>
  )
}