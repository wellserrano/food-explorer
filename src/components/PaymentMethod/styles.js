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

  height: 30rem;

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

    img {
      width: 20rem;
      height: 20rem;
    };
  };

  &.credit-card-info {

  }
`