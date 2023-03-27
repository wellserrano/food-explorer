/* eslint-disable camelcase */
import {
  Container,
  Form,
  AddButton,
  ImageUpload
} from './styles'

// api conn
import { api } from '../../services/api'

// Hooks
import React, { useEffect, useState } from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom'

// Components
import { Footer } from '../../components/Footer'
import { TextArea } from '../../components/TextArea'
import { TextInput } from '../../components/TextInput'
import { MoneyInput } from '../../components/MoneyInput'
import { TagIngredients } from '../../components/TagIngredients'
import { NewProductHeader } from '../../components/NewProductHeader'

// Icons
import { FiUpload, FiCheckCircle } from 'react-icons/fi'
import { HiOutlineChevronLeft } from 'react-icons/hi'

export function EditProduct () {
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [imageFile, setImageFile] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [description, setDescription] = useState('')

  const location = useLocation()
  const { productsDetails } = location.state
  const navigate = Navigate()

  async function handleImageUpload (event) {
    event.preventDefault()

    const file = event.target.files[0]
    setImageFile(file)
  }

  function handleIngredients (data) {
    setIngredients(data)
  }

  function handlePrice (data) {
    const priceWithDotSeparator = data.replace(',', '.')
    const priceAsFloatNumber = parseFloat(priceWithDotSeparator)
    setValue(priceAsFloatNumber)
  }

  async function handleEditProduct () {
    let dataImageName

    if (productsDetails?.image !== imageFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('image', imageFile)

      // DiskStorage (saving image)
      const response_image = await api.post('/products/image', fileUploadForm)
      dataImageName = response_image.data
    }

    const productData = {
      id: productsDetails?.product_id,
      name,
      description,
      ingredients,
      price: value,
      image: dataImageName ?? null
    }

    if (productsDetails) {
      const confirmed = confirm(`Você está atualizando o produto ${name}. Deseja continuar?`)
      if (!confirmed) return

      await api.put('/products', productData)
      alert('Produto atualizado com sucesso')
    } else {
      // Inserting product on DB
      const response_product = await api.post('/products', productData)

      const product_id = response_product.data

      // Inserting ingredients on DB
      await api.post('/ingredients', { product_id, ingredients })

      alert('Produto criado com sucesso')
      navigate('/')
    }
  }

  useEffect(() => {
    if (productsDetails) {
      setName(productsDetails.name)
      setValue(productsDetails.price)
      setImageFile(productsDetails.image)
      setDescription(productsDetails.description)
      handleIngredients(productsDetails.ingredients)
    }
  }, [])

  return (
    <Container>
      <NewProductHeader />
        <Form>
          <div className='back-link'>
            <Link to={-1}>
              <HiOutlineChevronLeft />
              <span>voltar</span>
            </Link>
          </div>

          <p className='title'>{ productsDetails ? 'Editar produto' : 'Criar produto' }</p>

          <ImageUpload>
            <span>Imagem do produto</span>

            <label htmlFor="image">
              <input
                id='image'
                type='file'
                accept='image/*'
                onChange={ handleImageUpload }
              />
                {
                  imageFile ? <FiCheckCircle /> : <FiUpload />
                }

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
              ingredientsProp={ ingredients }
              sendData={ handleIngredients }
            />
          </div>

          <div className="price">
            <MoneyInput
              prefix='R$'
              caption='Preço'
              value={ value }
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
            <AddButton
              type='button'
              onClick={ handleEditProduct }
            >
              { productsDetails ? 'Editar produto' : 'Criar produto' }
            </AddButton>
          </div>

        </Form>
      <Footer />
    </Container>
  )
}
