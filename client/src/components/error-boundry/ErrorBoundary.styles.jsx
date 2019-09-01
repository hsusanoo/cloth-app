import styled from 'styled-components';

import crownBroken from '../../assets/images/crown-broken.png';

export const ErrorImageOverlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ErrorImageContainer = styled.div`
    display: inline-block;
    background-image: url(${crownBroken});
    background-size: cover;
    background-position: center;
    width: 40vh;
    height: 40vh;
`;

export const ErrorImageText = styled.h2`
    font-size: 28px;
    color: #252525;
`;
