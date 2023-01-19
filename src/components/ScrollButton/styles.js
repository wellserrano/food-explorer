import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  width: 45px;
  height: 100%;

  ${({ direction }) => direction === 'right' ? `left: 0;` : `right: 0;`}

  ${({ direction }) => 
  direction === 'right' ? 
  `background: linear-gradient(90deg, transparent 0%, #000A0F 100%);` :
  `background: linear-gradient(270deg, transparent 0%, #000A0F 100%);`}

  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const Button = styled.button`
  width: 8.5rem;
  background: transparent;
`;
