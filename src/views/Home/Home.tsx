import styled from "styled-components";
import SideStack from "./SideStack/SideStack";
import LogoOverlay from "./LogoOverlay/LogoOverlay";

const HomeContainer = styled.main`
  height: calc(100% - 75px);
  width: 100%;
  padding: 3.5rem;
  display: flex;
`;

const Home = () => {
  return (
    <HomeContainer>
      <SideStack />
      <LogoOverlay />
    </HomeContainer>
  );
};

export default Home;
