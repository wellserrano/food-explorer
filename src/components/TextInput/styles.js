import styled from "styled-components";

export const Container = styled.div`
  
  width: 100%;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO };
  font-size: 1.6rem;
  
  input {
    width: 100%;
    height: 4.8rem;

    background: transparent;
    
    padding: 1.6rem 1.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;

    margin-bottom: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE };

    font-family: ${({ theme }) => theme.FONTS.ROBOTO };

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.MEDGRAY };
      font-style: italic;
    }
    
  }
  `;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  color: ${({ theme }) => theme.COLORS.LIGHTGRAY };  
  
  gap: .8rem;
`;