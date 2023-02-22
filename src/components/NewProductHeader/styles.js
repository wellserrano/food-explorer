import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADFOOT};

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 77.6rem;

    > svg {
      margin-right: 1.2rem;
    }
  
    span {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2.5rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  
      margin-right: 3.7rem;
      cursor: default;
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE2};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};

    margin-right: 3.2rem;

  }

  .search-input {
    margin-right: 3.2rem;
  }

  > button {
    display: flex;
    width: 21.6rem;

    padding: 1.2rem 3.3rem;
    margin-right: 3.2rem;

  }

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.2rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding-left: 2rem;
  }
  

`

export const AdminButton = styled(Link)`
  display: flex;
  align-items: center;
`

export const Blank = styled.div`
  width: 200px;
  background-color: red;
`
