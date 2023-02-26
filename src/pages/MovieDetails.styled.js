import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & img {
    border-radius: 8px;
  }
`;

export const ExtraInform = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  padding-left: 0px;
`;

export const Overview = styled.p`
  text-align: justify;
`;

export const ExtraInformItem = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
    padding-bottom: 10px;
    border-bottom: solid 2px orangered;
  }
`;
