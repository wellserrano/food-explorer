import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  font-size: 3.2rem;
  font-weight: 500;
  margin-block: 4.2rem .8rem;
  max-width: 112rem;

`;

export const Dishes = styled.div`
  display: flex;
  justify-content: left;
  gap: 2.7rem;
  overflow-x: scroll;
  max-width: 100%;

  .carousel-arrows-container{
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 112rem;
    top: 50%;
  }
  
`;

export const LeftArrowButton = styled.button`
  opacity: .4;
`;

export const RightArrowButton = styled.button`
  opacity: .4;
`;

