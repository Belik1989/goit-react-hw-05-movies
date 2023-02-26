import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  margin-top: 10px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    color: white;
    background-color: orangered;
  }
  & label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const SearchbarInput = styled.input`
  display: inline-block;
  /* width: 100%; */
  /* font: inherit; */
  font-size: 25px;
  border: none;
  outline: none;
  padding: 0px 4px 4px 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
