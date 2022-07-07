import { WheelEvent, useState, createRef, RefObject } from "react";
import styled from "styled-components";
import Logo from "../../../components/Logo/Logo";

const LogoOverlayContainer = styled.article`
  width: 90%;
  height: calc(100% - 75px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3%;
  padding-bottom: 5%;
  position: absolute;
  left: 10%;
  z-index: 99;
  background: transparent;
`;

const LogoOverlay = () => {
  const ZOOM_SPEED = 0.1;
  let logoRef: RefObject<HTMLElement> = createRef();
  let [zoom, setZoom] = useState<number>(1);

  const scaleLogo = (event: WheelEvent<Element>) => {
    if (!logoRef.current) return;

    let targetedZoom;

    if (event.deltaY > 0) {
      targetedZoom = Math.min(Math.max(0.1125, zoom - ZOOM_SPEED), 1);

      logoRef.current.style.transform = `scale(${targetedZoom})`;
      setZoom(targetedZoom);
    } else {
      targetedZoom = Math.min(Math.max(0.1125, zoom + ZOOM_SPEED), 1);
      logoRef.current.style.transform = `scale(${targetedZoom})`;
      setZoom(targetedZoom);
    }
  };

  return (
    <LogoOverlayContainer>
      <Logo
        withText
        withZoom
        handleScroll={scaleLogo}
        size="xlarge"
        ref={logoRef}
      />
    </LogoOverlayContainer>
  );
};

export default LogoOverlay;
