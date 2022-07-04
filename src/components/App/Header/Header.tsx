import {
  LinkContainer,
  HeaderContainer,
  ListContainer,
  NavContainer,
} from "./Header.styled";

import { routes } from "../../../util/routes";

const renderHeaderLinks = () => {
  return routes.map((route) => (
    <LinkContainer key={route.name.toLowerCase()}>
      {" "}
      <a href={route.dest}>{route.name}</a>{" "}
    </LinkContainer>
  ));
};

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
