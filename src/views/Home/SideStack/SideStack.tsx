import styled from "styled-components";
import Icon from "../../../components/Icons/Icons";

const SideStackContainer = styled.section`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 300ms ease-in-out;
  z-index: 99;
  padding: 50px 0;
`;

const SideStack = () => {
  return (
    <SideStackContainer>
      <a href="#suicide">
        <Icon icon="spade_s" height={70} width={55} />
      </a>
      <a href="#ptsd">
        <Icon icon="spade_p" height={70} width={55} />
      </a>
      <a href="#anxiety">
        <Icon icon="spade_a" height={70} width={55} />
      </a>
      <a href="#depression">
        <Icon icon="spade_d" height={70} width={55} />
      </a>
      <a href="#epilepsy">
        <Icon icon="spade_e" height={70} width={55} />
      </a>
    </SideStackContainer>
  );
};

export default SideStack;
