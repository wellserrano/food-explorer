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
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [imageFile, setImageFile] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('');
  


  async function handleImageUpload(event) {
    const file = event.target.files[0];
    setImageFile(file);
  }

  function handleIngredients(data) {
    setIngredients(data)
  }

  function handlePrice(data) {

    const priceWithDotSeparator = data.replace(",", ".")
    const priceAsFloatNumber = parseFloat(priceWithDotSeparator);

    setValue(priceAsFloatNumber);
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
              value={ name }
              placeholder='Ex.: Salada ceaser'
              onChange={ e => setName(e.target.value)}
            />
          </div>

          <div className="tags">
            <span>Ingredientes</span>
            <TagIngredients 
              sendData={ handleIngredients }
            />
          </div>

          <div className="price">
            <MoneyInput 
              prefix='R$'
              caption='Preço'
              sendData={ handlePrice }
            />
          </div>

          <div className="description">
            <span>Descrição</span>
            <TextArea 
              value={ description }
              onChange={ e => setDescription(e.target.value)}
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