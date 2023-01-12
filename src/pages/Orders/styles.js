import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  
  grid-template-areas: 
    "header"
    "table"
    "footer";
`;

export const Table = styled.div`
  grid-area: table;

  color: ${ ({ theme }) => theme.COLORS.WHITE2};

  margin: 3.4rem auto 31rem;
  
  > h1 {
    font-size: 3.2rem;
    margin-bottom: 3.4rem;
  } 

  table {
  
    border-collapse: separate;
    border-spacing: 0;
    
    td, th {
      font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };
      border: 1px solid ${ ({ theme }) => theme.COLORS.TABLE_BORDER };
    }

    tr th {
      font-weight: bold;
      padding-block: 2.1rem;

      font-size: 1.6rem;


      &:first-child {
        border-top-left-radius: 8px;

        width: 15.1rem;
      }

      &:nth-child(2) {
        width: 15.1rem;
      }

      &:nth-child(3) {
        width: 67rem;

      }

      &:last-child {
        border-top-right-radius: 8px;
        width: 15.1rem;
      }
    }

    tr td {
      
      padding: 1.6rem 2.4rem;

      > span {
        color: red;
      }

    }
  }
`;
