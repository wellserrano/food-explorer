import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  
  padding: 16px;

  background-color: transparent;
  color: ${ ({ theme }) => theme.COLORS.WHITE };

  border: 1px solid white;
  border-radius: 10px;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.MEDGRAY };
    font-style: italic;
  }
`;