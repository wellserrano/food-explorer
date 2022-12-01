import styled from 'styled-components';

export const Container = styled.button`  
  min-height: 4.8rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;;

  padding: 1.2rem 13.4rem;

  font-size: 1.4rem;

  color: ${ ({ theme }) => theme.COLORS.WHITE };
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_BUTTON  };

  border-radius: 5px;

  > svg {
    margin-right: 1.2rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE };
    
    font-size: 2.1rem;
  }
`;