import styled from "styled-components";
import { ReactComponent as Spade_S } from "../../../assets/spade_s.svg";
import { ReactComponent as Spade_P } from "../../../assets/spade_p.svg";
import { ReactComponent as Spade_A } from "../../../assets/spade_a.svg";
import { ReactComponent as Spade_D } from "../../../assets/spade_d.svg";
import { ReactComponent as Spade_E } from "../../../assets/spade_e.svg";

const S = styled(Spade_S)`
    &:hover {
        cursor: pointer;
    }
`;

export { S, Spade_P as P, Spade_A as A, Spade_D as D, Spade_E as E };
