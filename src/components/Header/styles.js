import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 10.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADFOOT};

  .home-button {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .animation-click {
    animation: rotate .5s ease-out forwards;      
      @keyframes rotate {
        from {
          transform: rotate(180deg);
        }
  
        to {
          transform: rotate(0);
        }
      }    
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE2};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};

    margin-right: 3.2rem;

    > svg {
      margin-right: 1.2rem;
    }
  
    > span {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2.5rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  
      margin-right: 3.7rem;
      cursor: pointer;
    }

  }

  > button {
    display: flex;
    width: 21.6rem;

    padding: 1.2rem 3.3rem;
    margin-inline: 3.2rem;

  }

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.2rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {

    a, .children-wrapper, button {
      display: none;
    }
  }

`

export const AdminButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3.2rem;
  margin-inline: 2.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE2};

  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  cursor: pointer;
`
