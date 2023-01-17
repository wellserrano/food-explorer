import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 44.5rem;
  min-height: 40rem;

  
  padding-block: 1.6rem;
  
  `;
export const Rows = styled.div`
  overflow-y: auto;
  max-height: 41.6rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 2rem;

  color: ${ ({ theme }) => theme.COLORS.WHITE2 };

  width: 40rem;
  height: 10.4rem;

  > img {
    width: 7.4rem;
    height: 7.4rem;

    margin-right: 1.4rem;
  };

  .in-line {
    display: flex;

    align-items: center;
    justify-content: center;

    > span {
      font-weight: 400;
      font-size: 1.2rem;
      font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };

      color: ${ ({ theme }) => theme.COLORS.LIGHTGRAY };

      margin-left: 1rem;
    }
  };


`;

export const Delete = styled.button`
  
  font-size: 1.2rem;
  font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };

  background: none;

  color: ${ ({ theme }) => theme.COLORS.DELETE };

`;

export const Total = styled.div`
  > span {
    font-size: 2rem;

    color: ${ ({ theme }) => theme.COLORS.WHITE };
  }
`;