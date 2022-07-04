import styled from "styled-components";
import Icon from "../Icons/Icons";

const LogoContainer = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  // background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.1);
  padding-bottom: 140px;
  transition: all 200 ease;
  overflow: hidden;

  h3 {
    position: absolute;
    bottom: 120px;
    text-align: center;

    font-family: "Rajdhani", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 44px;
  }

  &:hover {
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.3);
    cursor: pointer;

    svg {
      filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.6));
    }
  }
`;

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
