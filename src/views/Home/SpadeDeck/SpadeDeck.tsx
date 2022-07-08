import styled from "styled-components";
import LogoOverlay from "../LogoOverlay/LogoOverlay";

const SpadeDeckContainer = styled.article`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  overflow: hidden;
`;

const SpadeDeckCardContainer = styled.section`
  width: 100%;
  min-height: 100%;

  // background colors used for testing
  &#suicide {
    // background-color: red;
  }

  &#ptsd {
    // background-color: blue;
  }

  &#anxiety {
    // background-color: yellow;
  }

  &#depression {
    // background-color: pink;
  }

  &#epilepsy {
    // background-color: white;
  }
`;

type CardProps = {
  id: string;
};

const SpadeDeckCard = ({ id }: CardProps) => {
  return <SpadeDeckCardContainer id={id}></SpadeDeckCardContainer>;
};

const SpadeDeck = () => {
  return (
    <SpadeDeckContainer>
      <LogoOverlay />
      <SpadeDeckCard id="suicide" />
      <SpadeDeckCard id="ptsd" />
      <SpadeDeckCard id="anxiety" />
      <SpadeDeckCard id="depression" />
      <SpadeDeckCard id="epilepsy" />
    </SpadeDeckContainer>
  );
};

export default SpadeDeck;
