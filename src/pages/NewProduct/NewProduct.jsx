import { 
  Container, 
  Content, 
  AddButton, 
  ImageUpload,  
} from './styles';

//Hooks
import { useState } from 'react';

//Components
import { Footer } from '../../components/Footer'
import { TextArea } from '../../components/TextArea'
import { TextInput } from '../../components/TextInput'
import { MoneyInput } from '../../components/MoneyInput'
import { TagIngredients } from '../../components/TagIngredients'
import { NewProductHeader } from '../../components/NewProductHeader';

//Icons
import { FiUpload } from 'react-icons/fi';
import { HiOutlineChevronLeft } from 'react-icons/hi'

export function NewProduct() {
  const [imageFile, setImageFile] = useState('');

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  return (
    <Container>
      <NewProductHeader />
        <Content>
          <div className='back-link'>
            <HiOutlineChevronLeft />
            <span>voltar</span>
          </div>

          <p className='title'>Editar prato</p>

          <ImageUpload>
            <span>Imagem do prato</span>

            <label htmlFor="image">
              <input 
                id='image'
                type='file'
                onChange={ handleImageUpload }
              />
                <FiUpload />
                Selecione imagem
            </label>
          </ImageUpload>

          <div className='name-input'>
            <TextInput 
              caption='Nome'
              placeholder='Ex.: Salada ceaser'
            />
          </div>

          <div className="tags">
            <span>Ingredientes</span>
            <TagIngredients />
          </div>

          <div className="price">
            <MoneyInput 
              caption='Preço'
              prefix='R$'
            />
          </div>

          <div className="description">
            <span>Descrição</span>
            <TextArea 
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            />
          </div>

          <div className="add-button">
            <AddButton type='button'>
                Adicionar pedido
            </AddButton>
          </div>

        </Content>
      <Footer />
    </Container>
  )
}