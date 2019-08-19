import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from '../../assets/images/arrow-right-thin.svg';

export const MoreArrowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    height: 100%;
    width: 100%;
    padding-top: 45%;
`;

export const Arrow = styled(ArrowSvg)`
    height: 15%;
    width: 15%;
    fill: #333;

    &:hover {
        fill: #0b0b0b;
    }
`;

export const StyledSpan = styled.span`
    position: absolute;
    top: 60%;
`;
