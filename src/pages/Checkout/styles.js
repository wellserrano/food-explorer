import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
  "header       header"
  "contentLeft  contentRight"
  "footer       footer";
  
  color: ${ ({ theme }) => theme.COLORS.WHITE }
  
`;

export const Items = styled.div`
  grid-area: contentLeft;

  margin: 3.4rem 7.5rem 15.2rem 12.3rem;

  > h2 {
    margin-bottom: 3.2rem;
  }
`;

export const Payment = styled.div`
  grid-area: contentRight;

  margin: 3.4rem 7.5rem 0 0;
  
  > h2 {
    margin-bottom: 3.2rem;
  }

`;
