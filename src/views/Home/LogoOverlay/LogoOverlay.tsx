import styled from "styled-components";
import Logo from "../../../components/Logo/Logo";

const LogoOverlayContainer = styled.article`
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3%;
  padding-bottom: 5%;
`;

const LogoOverlay = () => {
  return (
    <LogoOverlayContainer>
      <Logo withText />
    </LogoOverlayContainer>
  );
};

export default LogoOverlay;
