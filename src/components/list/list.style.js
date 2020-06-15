import styled from "styled-components";

export const Container = styled.main`
  overflow: auto;

  width: 100%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const TodoSection = styled.section`
  border: 2px solid #0E402D;
  border-radius: 0.5rem;
  margin: 1rem;
`;

export const TodoTitle = styled.p`
  background: #0E402D;
  color: #FFF;
  margin: 0;
  padding: 0.875rem;
  font-size: 1.125rem;
`;

export const Todos = styled.ul`
  list-style: none;
  margin: 0 0.875rem 0.875rem;
  padding: 0;
`;

export const TodoLi = styled.li`
  padding: calc(1px + 0.875rem);
  border-bottom: 1px solid #0E402D;
`;

export const Checkbox = styled.input`
  &:checked:after{
    background: #295135;
  }
`;

export const Label = styled.label`
  margin: 0 0.875rem;
  font-size: 1.125rem;
`;