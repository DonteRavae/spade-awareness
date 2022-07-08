import styled from "styled-components";

type LogoWrapperProps = {
  size: string | undefined;
};

const LogoContainer = styled.figure<LogoWrapperProps>`
  height: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "xlarge"
      ? "823px"
      : "360px"};
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "xlarge"
      ? "800px"
      : "450px"};
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.1);
  padding-top: ${(props) => (props.size === "small" ? "8px" : 0)};
  transition: all 200ms ease-out;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.04);

  h3 {
    position: absolute;
    bottom: 110px;
    text-align: center;
    color: white;

    font-family: "Rajdhani", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${(props) => (props.size === "small" ? "10px" : "34px")};
    line-height: 44px;
    display: ${(props) => (props.size === "small" ? "none" : "inherit")};
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.3);
    cursor: pointer;

    svg {
      filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
      transform: scale(1);
    }
  }
`;

export default LogoContainer;
