import styled from 'styled-components';

export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border-left: 2px #333333 solid;
    padding-left: 10px;
`;

export const CollectionTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 28px;
`;

export const SliderContainer = styled.div`
    padding-left: 30px;

    .slick-list {
        height: 350px;
        padding-top: 10px;
    }
`;
