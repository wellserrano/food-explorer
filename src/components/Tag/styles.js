import styled from "styled-components";

export const Container = styled.div`
  max-width: 16rem;
  height: 3.2rem;

  padding: 6.5px 16px;

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  
  background-color: ${ ({ isNew }) => isNew ? 'transparent' : 'rgba(255, 255, 255, 0.1)' };

  border-radius: 8px;

  border: ${ ({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.MEDGRAY}` : 'none' };

  > input {
    width: 100%;
    height: 56px;
    
    padding: 12px;

    color: ${ ({ theme, isNew }) => isNew ? theme.COLORS.LIGHTGRAY : theme.COLORS.WHITE };

    background: transparent;
    border: none;

    &::placeholder {
      color: ${ ({ theme }) => theme.COLORS.MEDGRAY };
    }
  };

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${ ({ theme }) => theme.COLORS.MEDGRAY }
  }
  
  .button-add {
    color: ${ ({ theme }) => theme.COLORS.LIGHTGRAY }
  }


`;