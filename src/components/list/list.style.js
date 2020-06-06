import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100%;
  padding: 1rem;
  overflow: auto;
`;

export const TodoSection = styled.section`
  border: 1px solid grey;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 1rem 1rem 0 1rem;
  margin: 0 0 1rem 0;
`;

export const TodoTitle = styled.h3`
  margin: 0 0 1rem 0;
`;

export const Todos = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Checkbox = styled.input`
  &:checked:after{
    background: #295135;
  }
`;
