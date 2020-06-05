import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100%;
  padding 1rem;
`;

export const TodoSection = styled.section``;

export const Todos = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Checkbox = styled.input`
  &:checked:after{
    background: #295135;
  }
`;
