import styled from "styled-components";

export const Container = styled.div`

  display: flex;

  color: ${ ({ theme }) => theme.COLORS.WHITE2 };

  .ingredient {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-right: 1.6rem;

    > img {
      width: 5.9rem;
      height: 5.9rem;
  
    }
  };

`;
