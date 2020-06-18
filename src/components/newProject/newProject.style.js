import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const SubmitProject = styled.input`
  height: 1.5rem;
  width: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: bold;
  color: #88c0d0;

  &:hover {
    color: #ebcb8b;
  }
`;

export const TextInput = styled.input`
  height: 1.375rem;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 1.125rem;
  font-weight: normal;
  color: #88c0d0;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;