import styled from "styled-components";


const LogoContainer = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
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
    font-weight: 300;
    font-size: 34px;
    line-height: 44px;
  }

  &:hover {
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.3);
    cursor: pointer;

    svg {
      filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
      transform: scale(1);
    }
  }
`;

export default LogoContainer;