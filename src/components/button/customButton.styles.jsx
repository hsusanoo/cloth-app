import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: #0f0f0f;
    color: #fafafa;
    border: none;

    &:hover {
        background-color: #fafafa;
        color: #0f0f0f;
        border: 1px solid #0f0f0f;
    }
`;

const invertedButtonStyles = css`
    background-color: #fafafa;
    color: #0f0f0f;
    border: 1px solid #0f0f0f;

    &:hover {
        background-color: #0f0f0f;
        color: #fafafa;
        border: none;
    }
`;

const googleButtonStyles = css`
    background-color: #4285f4;
    color: #fafafa;
    border: none;

    &:hover {
        background-color: #375ae8;
    }
`;

const getButtonStyles = props =>
    props.isGoogle
        ? googleButtonStyles
        : props.inverted
        ? invertedButtonStyles
        : buttonStyles;

export const CustomButtonContainer = styled.button`
    margin-top: 5px;
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    line-height: 50px;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Open Sans Condensed', serif;
    font-weight: bolder;
    cursor: pointer;
    ${getButtonStyles}
`;
