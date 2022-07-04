import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: end;
`;

export const NavContainer = styled.nav`
  height: 100%;
  width: 40%;
`;

export const ListContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkContainer = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;