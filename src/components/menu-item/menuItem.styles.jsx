import styled from 'styled-components';

export const StyledItemBackground = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`;

export const StyledContent = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(74, 74, 74, 0.5);
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
`;

export const StyledContentTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 25px;
    color: #4a4a4a;
`;

export const StyledContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 260px;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(74, 74, 74, 0.59);
    margin: 5px;
    overflow: hidden;

    &:hover {
    cursor: pointer;
    
        & ${StyledItemBackground} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(.25, .45, .45, .95);
        }
        
        & ${StyledContent} {
            opacity: 0.9;
        }
    }
    
    &.large {
        height: 380px;
        @media screen and (max-width: 400px) {
            width: 100%;
        }
`;
