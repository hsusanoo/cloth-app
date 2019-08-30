import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 60%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;

    button {
        margin-left: auto;
        margin-top: 30px;
        width: 100px;
    }

    @media screen and (max-width: 670px) {
        width: 100%;
        button {
            width: 100%;
        }
    }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #989898;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    text-align: center;
    width: 23%;
`;

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 35px;
`;

export const Notice = styled.div`
    color: #d00000;
    text-align: center;
    margin: 30px;
`;
