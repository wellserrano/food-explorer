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

export const Content = styled.div``;