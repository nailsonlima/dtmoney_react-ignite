import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ddd;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #fff;
  }
  
  html {
    font-size: 16px;
    @media(max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: 0;
    color: var(--text-body);


    transition: color 0.2s;
    &:hover{
      filter: brightness(0.8);
    }
  }

`