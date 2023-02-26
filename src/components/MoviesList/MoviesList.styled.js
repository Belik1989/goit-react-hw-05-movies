import styled from 'styled-components';

export const MoviesListBox = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MoviesListBoxItem = styled.li`
  display: block;
  border-radius: 6px;
  transition: scale 200ms;
  &:hover,
  &:focus {
    scale: 1.06;
  }
  & img {
    border-radius: 6px;
    height: 100%;
  }
`;
