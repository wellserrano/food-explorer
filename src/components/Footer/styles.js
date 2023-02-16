import styled from 'styled-components'

export const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 7.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12.3rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADFOOT};

  .logo {
    display: flex;
    align-items: center;

    opacity: 0.3;
  }

  .logo svg {
    font-size: 2.9rem;
    margin-right: 1.1rem;
  }

  .logo p {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-weight: bold;
  }

  > span {
    opacity: .9;
    font-weight: 200;
  }

  @media (max-width: 768px) {

    padding: 5rem 2rem;

    > span {
      font-size: 1rem;
    }
  }

  `
