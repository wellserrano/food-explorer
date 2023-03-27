import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer";

  color: ${({ theme }) => theme.COLORS.WHITE};

  span {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};

    color: ${({ theme }) => theme.COLORS.LIGHTGRAY};
  }
`

export const Form = styled.form`
  grid-area: content;
  
  display: grid;

  grid-template-areas: 
    "BackLink     BackLink      BackLink"
    "Title        Title         Title"
    "ImageButton  NameInput     NameInput"
    "Tags         Tags          Price"
    "Description  Description   Description"
    "blank        blank         AddButton";

  grid-template-columns: 1fr 2fr;

  
  margin: 3rem 12rem 12rem 12rem;

  > p {
    font-size: 3.2rem;
    margin-block: 2.4rem 3.2rem;
  }

  .back-link {
    grid-area: BackLink;
    
    display: flex;
    align-items: center;

    width: 100%;

    font-size: 2.4rem;

    > a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      
      > svg {
        font-size: 2.2rem;
        color: #ACACB3;
      }

      > span {
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
      }
    }
  }

  .title {
    grid-area: Title;
    width: 100%;
  }

  .name-input {
    grid-area: NameInput;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;
  }

  .tags {
    grid-area: Tags;
    width: 83.7rem;
    
    > div {
      margin-top: .8rem;
    }
  }

  .price {
    grid-area: Price;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .description {
    grid-area: Description;

    margin-top: 3.2rem;

    > textarea {
      margin-top: .8rem;
    }
  }

  .add-button {
    grid-area: AddButton;
    margin-top: 2.4rem;

    grid-column: span 3;

    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  @media (max-width: 768px) {
    grid-template-areas: 
    "BackLink"
    "Title"
    "ImageButton"
    "NameInput"
    "Tags"
    "Price"
    "Description"
    "AddButton";

    grid-template-columns: 1fr;

    margin: 1rem 3.2rem 5.3rem;

    .name-input {
      max-width: 55rem;
      margin: 0;
    }

    .tags {
      max-width: 55rem;
      margin: 0;
    }

    .price {
      max-width: 55rem;
      justify-content: flex-start;
    }

    .description {
      max-width: 55rem;
    }

    .add-button {
      margin-top: 1.5rem;   

      display: flex;
      align-items: center;
      justify-content: flex-start;

    }

  }
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35.7rem;
  height: 4.8rem;

  border: 1px solid white;
  border-radius: 5px;
  
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.COLORS.WHITE};


`

export const ImageUpload = styled.div`
  grid-area: ImageButton;

  display: flex;
  flex-direction: column;
  
  width: 23rem;

  label {
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    
    gap: .8rem;
    
    margin-top: 8px;
    
    border: 1px solid white;
    border-radius: 5px;
    
    &:hover {
      cursor: pointer;
    }

    > input {
      display: none;

      position: absolute;
      top: 0; 
      left: 0; 
      bottom: 0; 
      right: 0; 

      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.WHITE};
      
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 1.4rem;
  
      > svg {
        font-size: 2.4rem;
      };
    };
  }

`
