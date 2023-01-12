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
  .image-container {
    display: flex;
    justify-content: center;

    padding: 4.7rem 13rem;

    border-left: 1px solid rgba(255, 255, 255, 0.10);
    border-right: 1px solid rgba(255, 255, 255, 0.10);
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);

    img {
      width: 27rem;
      height: 27rem;
    };
  }
`