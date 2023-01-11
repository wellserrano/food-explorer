import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
  "header       header"
  "contentLeft  contentRight"
  "footer       footer";
  
`;

export const Items = styled.div`
  grid-area: contentLeft;
`;

export const Payment = styled.div`
  grid-area: contentRight;
`;
