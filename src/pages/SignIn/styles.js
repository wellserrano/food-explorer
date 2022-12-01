import styled from 'styled-components';

export const Container = styled.div`  
  width: 100%;
  height: 100vh;
  
  display: flex;

  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO };
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE };
  
    margin: 34rem 30.6rem 43.5rem 22.2rem;

    > svg {
      margin-right: 2.9rem;
    }
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;

    > h1 {
      margin: 2.4rem auto;
    }

    > form {
      height: 75vh;

      padding: 1rem;
    }
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  
  width: 47.6rem;
  height: 60rem;
  
  margin: auto;
  padding: 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_FORM};

  border-radius: 16px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE };
    margin-bottom: 3.2rem;
    font-size: 3.2rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE };
    font-size: 1.4rem;

    margin-top: 3.2rem;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 1.4rem;

    > h2 {
      margin-bottom: 1.6rem;
    }

    > input {
      margin-bottom: 2.1rem;
    }
    
  }

`