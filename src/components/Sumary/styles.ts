import styled from "styled-components";

export const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -9.6rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: .8rem;
      font-size: 1.4rem;
      line-height: 3rem;
      font-weight: 500;
    }
    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }

`