import { Container, Content } from './styles'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'
import { SearchInput } from '../../components/SearchInput'

import splashFruits from '../../assets/splashfruits.png'

import { FiSearch } from 'react-icons/fi'

import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home () {
  const [search, setSearch] = useState('')
  const [dishes, setDishes] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const carousels = [
    { title: 'Pratos Principais', category: 'principal' },
    { title: 'Sobremesas', category: 'sobremesa' },
    { title: 'Bebidas', category: 'bebida' }
  ]

  async function handleSearch () {
    if (search.length === 0) return

    const response = await api.get(`/dishes/search?like=${search}`)

    setDishes(response.data)
    setIsSearching(true)
  }

  useEffect(() => {
    if (search.length === 0) {
      setDishes([])
      setIsSearching(false)
    }
  }, [search])

  return (
    <Container>
      <Header className='header'>
        <SearchInput
          className="search-input"
          icon={ FiSearch }
          handle={ handleSearch }
          onChange={e => setSearch(e.target.value) }
          onKeyPress={e => e.key === 'Enter' ? handleSearch() : false }
        />
      </Header>

      <Content isSearching={search}>

        {
          search.length > 0 && !isSearching
            ? <h1>Pressione enter para confirmar a pesquisa...</h1>

            : isSearching
              ? <Carousel
            key={'search-results'}
            title={`${dishes.length} Resultado(s)`}
            category={'search'}
            searchData={ dishes }
          />

              : <>
              <div className="fruits-panel">
                <img src={ splashFruits } alt="fruits in the air" />
                <div className="text-wrapper">
                  <h1>Sabores inigualáveis</h1>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
              </div>
              {
                carousels.map((carousel, i) => (
                  <Carousel
                    key={`${carousel.category}-${i}`}
                    className='carousel'
                    title={carousel.title}
                    category={carousel.category}
                  />
                ))
              }
            </>
        }

      </Content>

      <Footer />
    </Container>
  )
}
