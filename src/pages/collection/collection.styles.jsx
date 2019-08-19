import styled from 'styled-components';

export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5%;
`;

export const StyledTitle = styled.h1`
    font-size: 38px;
    margin: 0 auto 10px;
`;

export const StyledHr = styled.hr`
    width: 100%;
    margin-bottom: 30px;
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-flow: dense;
    grid-gap: 20px 10px;
`;
