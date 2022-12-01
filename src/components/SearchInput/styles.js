import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

padding: 1.2rem 1.4rem;

font-size: 1.95rem;

color: ${ ({ theme }) => theme.COLORS.LIGHTGRAY };
background: ${ ({ theme }) => theme.COLORS.BACKGROUND_INPUT };

gap: 1.4rem;

border-radius: 5px;

> input {
  background: transparent;

  width: 40rem;
  height: 4.8rem;

  color: ${ ({ theme }) => theme.COLORS.WHITE2 };
}

`;