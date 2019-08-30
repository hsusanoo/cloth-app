import styled from 'styled-components';
import CustomButton from '../button/CustomButton';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    max-height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #0b0b0b;
    background-color: #fafafa;
    top: 80px;
    right: 50px;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const CustomButtonContainer = styled(CustomButton)`
    margin-top: 20px;
    left: auto;
`;
