import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND };

  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
  "header"
  "content"
  "footer";

  >div.header {
    display: flex;
    justify-content: space-between;
  }
  `;

export const Content = styled.div`
  grid-area: content;

  margin: 0 auto 9.8rem;

  color: ${ ({ theme }) => theme.COLORS.WHITE2 };

  padding: 2.5rem 1.4rem;

  .fruits-panel {
    position: relative;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    margin: 0 auto;
    
    width: 100%;
    height: 26rem;
    
    background: ${ ({ theme }) => theme.COLORS.GRADIENT_PANEL };
    border-radius: 8px;
    
    > img {
      position: absolute;
      top: -152px;
      left: -57px;

      width: 65rem;
      height: 41.2rem;
    }

    .text-wrapper {
      margin-right: 4.6rem;
      > h1 {
      font-size: 4rem;
      font-weight: medium;
      }
  
      > p {
        font-size: 1.6rem;
        font-weight: regular;
      }
    }

  }
  

`;