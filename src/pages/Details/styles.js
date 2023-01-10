import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND };

  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
    "header       header" 
    "contentLeft  contentRight" 
    "footer       footer";
  `;

export const ContentLeft = styled.div`
  grid-area: contentLeft;

  color: ${ ({ theme }) => theme.COLORS.WHITE };

  .back-link {
    grid-area: BackLink;
    
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 2.4rem;

    > svg {
      font-size: 3.2rem;
    };

    > span {
      font-family: ${ ({ theme }) => theme.FONTS.POPPINS };
      font-weight: 100;
    }

  };

  > img {
    width: 39rem;
    height: 39rem;
  }
`;

export const ContentRight = styled.div`
  grid-area: contentRight;

  > h2 {
    color: ${ ({ theme }) => theme.COLORS.WHITE };
    font-weight: 100;

  }

  > p {
    color: ${ ({ theme }) => theme.COLORS.WHITE2 };
    font-weight: 100;

  }

`;
