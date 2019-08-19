import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 90px;
    border-bottom: 1px solid #989898;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    width: 23%;
    display: flex;
    justify-content: center;
`;

export const StyledImage = styled.img`
    width: 70%;
    height: 70%;

    @media screen and (max-width: 670px) {
        width: 100%;
        height: 100%;
    }
`;

export const StyledName = styled.span`
    width: 23%;
    text-align: left;
    padding-left: 25px;
`;

const propertyStyle = css`
    width: 23%;
    text-align: center;
`;

export const StyledQuantity = styled.div`
    ${propertyStyle};
    display: flex;
    justify-content: space-evenly;
`;

export const StyledArrow = styled.span`
    cursor: pointer;
    ${props =>
        props.inactive &&
        `
        cursor: auto;
        opacity: 0.4;
      `}
`;

export const StyledPrice = styled.span`
    ${propertyStyle}
`;

export const RemoveButtonContainer = styled.div`
    ${propertyStyle}
`;

export const StyledRemoveButton = styled.span`
    cursor: pointer;
`;
