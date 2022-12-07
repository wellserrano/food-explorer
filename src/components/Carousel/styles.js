import styled from "styled-components";

export const Container = styled.div`
  font-size: 3.2rem;
  font-weight: 500;
  margin-block: 4.2rem .8rem;
`;

export const Dishes = styled.div`
  display: flex;
  gap: 2.7rem;

  justify-content: center;

  //Insert fade here
  & > div:first-child {
    opacity: .4;    
  }

  & > div:last-child {
      opacity: .4;
  }
`;