import styled from "styled-components";

export const Container = styled.main`
  overflow: auto;

  width: 100%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const AddButton = styled.button`
  cursor: pointer;
  margin: 1rem 0 0 1rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  background: #434c5e;
  color: #eceff4;
  border: none;

  &:hover {
    background: #5e81ac;
    color: #ebcb8b;
  }
`;