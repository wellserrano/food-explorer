import styled from "styled-components";

export const Container = styled.div`
  font-size: 3.2rem;
  font-weight: 500;
  margin-block: 4.2rem .8rem;
  max-width: 112rem;

  .in-row {
    position: absolute;

    top: 36px;
    
    display: flex;
    justify-content: space-between;

    min-width: 100%;

    height: 51.5rem;    
  };

`;

export const Dishes = styled.div`
  position: relative;

  display: flex;
  justify-content: left;
  gap: 2.7rem;
  overflow: hidden;

  width: 100%;
  align-items: center;
  
`;

export const LeftArrowButton = styled.button`
  width: 8.5rem;
  height: 100%;
  align-items: center;

  background: linear-gradient(90deg, transparent 0%, #000A0F 100%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const RightArrowButton = styled.button`
  width: 8.5rem;
  height: 100%;
  align-items: center;

  background: linear-gradient(270deg, transparent 0%, #000A0F 100%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

