import styled from "styled-components";
// import * as SPADE from "../../Icons/Spade";

const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: end;
`;

const NavContainer = styled.nav`
  height: 100%;
  width: 50%;
`;

const ListContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkContainer = styled.li`
  a {
    color: white;
    text-decoration: none;
    // font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
  }
`;

const renderHeaderLinks = () => {
  return routes.map((route) => (
    <LinkContainer key={route.name.toLowerCase()}>
      {" "}
      <a href={route.dest}>{route.name}</a>{" "}
    </LinkContainer>
  ));
};

const routes = [
  {
    dest: "/members",
    name: "Members",
  },
  {
    dest: "/media",
    name: "Media",
  },
  {
    dest: "/forum",
    name: "Forum",
  },
  {
    dest: "/counseling",
    name: "Counseling",
  },
  {
    dest: "/merchandise",
    name: "Merchandise",
  },
];

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <ListContainer>{renderHeaderLinks()}</ListContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
