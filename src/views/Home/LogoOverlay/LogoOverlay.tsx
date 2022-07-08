import { WheelEvent, useState, createRef, RefObject } from "react";
import styled from "styled-components";
import Logo from "../../../components/Logo/Logo";

const LogoOverlayContainer = styled.article`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-top: 1%;
  z-index: 99;
`;

const LogoOverlay = () => {
  const ZOOM_SPEED = 0.1;
  let logoRef: RefObject<HTMLElement> = createRef();
  let [zoom, setZoom] = useState<number>(1);

  const scaleLogo = (event: WheelEvent<Element>) => {
    if (!logoRef.current) return;

    if (event.deltaY > 0) {
      // moving down

      logoRef.current.style.transform = `scale(${Math.min(
        Math.max(0, zoom - ZOOM_SPEED),
        1
      )})`;
      setZoom(Math.min(Math.max(0, zoom - ZOOM_SPEED), 1));
    } else {
      // moving up

      logoRef.current.style.transform = `scale(${Math.min(
        Math.max(0, zoom + ZOOM_SPEED),
        1
      )})`;
      setZoom(Math.min(Math.max(0, zoom + ZOOM_SPEED), 1));
    }
  };

  return (
    <LogoOverlayContainer onWheel={scaleLogo}>
      <Logo withText size="small" ref={logoRef} />
    </LogoOverlayContainer>
  );
};

export default LogoOverlay;
