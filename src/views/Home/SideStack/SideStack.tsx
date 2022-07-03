import styled from "styled-components";
import Icon from "../../../components/Icons/Icons";

const SideStackContainer = styled.section`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 300ms ease-in-out;

  svg {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SideStack = () => {
  return (
    <SideStackContainer>
      <Icon icon="spade_s" height={70} width={55} />
      <Icon icon="spade_p" height={70} width={55} />
      <Icon icon="spade_a" height={70} width={55} />
      <Icon icon="spade_d" height={70} width={55} />
      <Icon icon="spade_e" height={70} width={55} />
    </SideStackContainer>
  );
};

export default SideStack;
