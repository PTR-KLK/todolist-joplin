import styled from "styled-components";

export const Section = styled.section`
  border: 2px solid #434c5e;
  border-radius: 0.5rem;
  margin: 1rem;
`;

export const Title = styled.p`
  background: #434c5e;
  color: #FFF;
  margin: 0;
  padding: 0.875rem;
  font-size: 1.125rem;
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