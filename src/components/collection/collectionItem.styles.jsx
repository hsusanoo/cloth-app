import styled from 'styled-components';
import CustomButton from '../button/CustomButton';

export const CustomButtonContainer = styled(CustomButton)`
    width: 80%;
    position: absolute;
    top: 70%;
    display: none;
`;

export const ItemImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`;

export const CollectionItemContainer = styled.div`
    width: 90%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    height: 320px;
    align-items: center;
    overflow: hidden;
    position: relative;

    &:hover {
        box-shadow: -1px 1px 10px -2px rgba(0, 0, 0, 0.35);
        transition: transform 0.1s ease;
        transform: scale(1.05);
        cursor: pointer;
        border-radius: 5px;

        ${ItemImageContainer} {
            opacity: 0.8;
        }

        ${CustomButtonContainer} {
            display: flex;
            opacity: 0.85;
        }
    }
`;

export const ItemFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin: 5px 0;
`;

export const ItemNameContainer = styled.span`
    padding-left: 3px;
`;

export const ItemPriceContainer = styled.span`
    padding-right: 3px;
`;
