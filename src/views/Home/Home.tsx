import styled from "styled-components";
import SideStack from "./SideStack/SideStack";
import LogoOverlay from "./LogoOverlay/LogoOverlay";
import SpadeDeck from "./SpadeDeck/SpadeDeck";

const HomeContainer = styled.main`
  height: calc(100% - 75px);
  width: 100%;
  padding: 3.5rem;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
      <SideStack />
      <SpadeDeck />
    </HomeContainer>
  );
};

export default Home;
