import styled from "styled-components";
import * as Spade from "./lib/Spade";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

type IconProps = {
  icon: string;
  height?: number;
  width?: number;
  dest?: string;
};

const IconContainer = styled.div`
  svg {
    &.logo {
    }

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
    }
  }
`;

const Icon = ({ icon, height, width, dest }: IconProps) => {
  switch (icon) {
    case "logo":
      return (
        <IconContainer>
          <LogoSVG height={height} width={width} />
        </IconContainer>
      );
    case "spade_s":
      return (
        <IconContainer>
          <Spade.S height={height} width={width} />
        </IconContainer>
      );
    case "spade_p":
      return (
        <IconContainer>
          <Spade.P height={height} width={width} />
        </IconContainer>
      );
    case "spade_a":
      return (
        <IconContainer>
          <Spade.A height={height} width={width} />
        </IconContainer>
      );
    case "spade_d":
      return (
        <IconContainer>
          <Spade.D height={height} width={width} />
        </IconContainer>
      );
    case "spade_e":
      return (
        <IconContainer>
          <Spade.E height={height} width={width} />
        </IconContainer>
      );
    default:
      return <article></article>;
  }
};

export default Icon;
