import styled from "styled-components";

export const Container = styled.div`
  width: 32rem;
  height: 51.2rem;

  font-size: 2.4rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin-top: 3.9rem;
  padding: 2.6rem 2.25rem 3.6rem;

  background-color: rgba(0, 0, 0, 0.32);

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.65);

  .favorite {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    >svg {
      cursor: pointer;
    }
  }

  main {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 17.6rem;
      height: 17.6rem;

      margin-block: 1.7rem;
    }

    .dish-name {
      color: ${({ theme }) => theme.COLORS.WHITE2 };
      margin-bottom: 1.6rem;
    }

    .dish-description {
      font-size: 1.4rem;
      font-weight: 400;
      font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };

      color: ${({ theme }) => theme.COLORS.LIGHTGRAY };
    }
  }
`;

export const Money = styled.div`
  font-size: 3.2rem;
  font-weight: 400;

  margin-block: 1.6rem;
  
  color: ${({ theme }) => theme.COLORS.MONEY };
`;