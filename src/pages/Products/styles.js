import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  display: grid;
  grid-template-rows: 10.4rem 3.5rem auto 7.7rem;

  grid-template-areas: 
    "header       header"
    "backLink     _"
    "content      content" 
    "footer       footer";

  .back-link {
    grid-area: backLink;
    
    display: flex;
    
    width: 100%;
    
    align-items: center;

    margin-top: 2.4rem;
    margin-left: 12.2rem;

    font-size: 2.4rem;

    > svg {
      font-size: 3.2rem;
      cursor: pointer;
    };

    > span {
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-weight: 100;
      cursor: pointer;
    };
  };

`

export const Content = styled.div`
  display: grid;
  grid-area: content;

  grid-template-columns: 1fr 2fr;

  grid-template-areas: 
    "contentLeft contentRight";

  gap: 4rem;

  margin: 4.1rem auto 14rem 12.2rem;

  @media (max-width: 768px) {
    grid-template-rows: auto auto;
    grid-template-areas: 
    "contentLeft"
    "contentRight";

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    justify-items: center;

    margin: 5rem ;
  }  

`

export const ContentLeft = styled.div`
  grid-area: contentLeft;

  > img {
    width: 39rem;
    height: 39rem;
  };

  @media (max-width: 768px) { 
    > img {
      width: 26.4rem;
      height: 26.4rem;
    }
  }
`

export const ContentRight = styled.div`
  grid-area: contentRight;

  > h2 {
    font-size: 4rem;
    font-weight: 100;

    color: ${({ theme }) => theme.COLORS.WHITE2};

    margin-bottom: .8rem;

  };

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE2};

    font-weight: 100;
    font-size: 2.4rem;

    margin-bottom: 2.6rem;
  };

  .price-quantity {
    display: flex;
    align-items: center;

    gap: 1.8rem;

    margin-top: 4.3rem;

    > span {
      font-size: 3.2rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};

      margin-right: 5.3rem;
    }

  };

  @media (max-width: 768px) {
    > h2 {
      font-size: 2.7rem;
    }
    > p {
      font-size: 1.6rem;
    }
  }

`
