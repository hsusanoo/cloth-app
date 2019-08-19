import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/images/crown.svg';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 70px;
    width: 70px;
`;

export const Logo = styled(LogoSvg)`
    width: 60px;
    height: 60px;
    fill: #333333;
    &:hover {
        fill: #121212;
    }
`;

export const NavContainer = styled(Link)`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavItemLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
