import Icon from "../Icons/Icons";
import LogoContainer from "./Logo.styled";

type LogoProps = {
  width?: number;
  height?: number;
  withText?: boolean;
};

const Logo = ({ width, height, withText }: LogoProps) => {
  return withText ? (
    <LogoContainer className="logo">
      <Icon icon="logo" height={height || 650} width={width || 800} />

      <h3>
        POST TRAUMATIC STRESS DISORDER <br /> SUICIDE | ANXIETY | DEPRESSION |
        EPILEPSY
      </h3>
    </LogoContainer>
  ) : (
    <LogoContainer>
      <Icon icon="logo" height={height} width={width} />
    </LogoContainer>
  );
};

export default Logo;
