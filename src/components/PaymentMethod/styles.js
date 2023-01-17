import styled from 'styled-components';

export const Container = styled.div`
  width: 53rem;
  height: 44.5rem;

  .options {
    display: flex;

  };
`;

export const Option = styled.button`
  width: 26.5rem;
  height: 8.1rem;

  color: ${ ({ theme }) => theme.COLORS.WHITE };

  border: 0.5px solid rgba(255, 255, 255, 0.10);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: ${ ({ isActive }) => isActive ? `rgba(255, 255, 255, 0.05)` : `#000C12` };
`

export const Method = styled.div`

  height: 38rem;

  border-left: 1px solid rgba(255, 255, 255, 0.10);
  border-right: 1px solid rgba(255, 255, 255, 0.10);
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);

  &.message {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
    gap: 3.7rem;

    padding: 4.7rem 13rem;

    color: ${ ({ theme }) => theme.COLORS.LIGHTGRAY };

    svg {
      font-size: 10.4rem;
      /* height: 10.4rem; */

      opacity: .7;
    };

    > span {
      width: 34.8rem;

      display: flex;
      justify-content: center;
    }

  };


  &.pix-qr-container {
    display: flex;
    justify-content: center;

    padding: 4.7rem 13rem;

  };

  &.credit-card-info {
    padding: 5.9rem 9.1rem 4.8rem;

    font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };

    label {
      font-size: 1.6rem;
      color: ${ ({ theme }) => theme.COLORS.LIGHTGRAY };
    }

    input {
      margin-top: 8px;
    }
    
    .in-line {
      display: flex;
      gap: 1.7rem ;
    }

    > button {
      width: 34.8rem;
      height: 5.6rem;
      padding: 0;

      font-size: 1.4rem;

      > svg {
        font-size: 3.2rem;
      }
    }

    
  }
`