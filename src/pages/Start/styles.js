import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fd5068;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;


export const Center = styled.div`
    display: flex;
    max-width: 720px;
    flex-direction: column;
    align-items: center;
    color: #fff;
    justify-content: center;
    padding: 8px;

    img{
        width: 160px;
        height: 160px;
        margin-bottom: 8px;
    }

    h1{
        font-size: 72px;
    }

    p{
        margin-top: 16px;
        margin-bottom: 32px;
        font-size: 24px;
        text-align: center;
    }

    a{
        background:  #fff;
        color: #fd5068;
        font-size: 20px;
        padding: 20px 44px;
        border-radius: 16px;
    }

    a:hover{
        background: ${darken(0.08, '#fff')};
        box-shadow: 0 0 3px #fd5068;
    }
`;
