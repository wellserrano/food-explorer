import styled from 'styled-components';

export const Container = styled.div`

  > select {
    padding: 1.6rem;  

    color: ${ ({ theme }) => theme.COLORS.WHITE2 };

    font-size: 1.8rem;
    font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };

    background: #010A0F;

    gap: 120px;

    appearance: none;

    border-radius: 6px;
  }
  
`;
