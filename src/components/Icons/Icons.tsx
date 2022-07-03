import * as Spade from "./lib/Spade";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

type IconProps = {
  icon: string;
  height?: number;
  width?: number;
};

const Icon = ({ icon, height, width }: IconProps) => {
  switch (icon) {
    case "logo":
      return <LogoSVG height={height} width={width} />;
    case "spade_s":
      return <Spade.S height={height} width={width} />;
    case "spade_p":
      return <Spade.P height={height} width={width} />;
    case "spade_a":
      return <Spade.A height={height} width={width} />;
    case "spade_d":
      return <Spade.D height={height} width={width} />;
    case "spade_e":
      return <Spade.E height={height} width={width} />;
    default:
      return <article></article>;
  }
};

export default Icon;
