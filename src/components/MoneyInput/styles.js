import styled from "styled-components";

export const Container = styled.div`

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  
    gap: .8rem;
  
    height: 4.8rem;
  
    border-radius: 5px;
    border: 1px solid white;      
    
    padding: 1.6rem 1.4rem;

    > input {
      background-color: transparent;
      color: ${ ({ theme }) => theme.COLORS.WHITE };
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  color: ${({ theme }) => theme.COLORS.LIGHTGRAY };  
  
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO };
  
  gap: .8rem;
`;