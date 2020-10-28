import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size : 48px;
    color : #3A3A3A;
    max-width: 1000px;
    line-height: 56px; 

    margin-top: 80px;
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 16px;
    margin-left: 16px;
`;

export const Form = styled.form<FormProps>`
    
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 1px solid #0000FF;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #0000FF;
        border-radius: 0px 5px 5px 5px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${ shade(0.2 , '#0000FF') };
        }
    }
`;

export const Header = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #000000;
        transition: color 0.5s;
        
        &:hover {
           color: #0000FF; 
        }

        svg {
            margin-right: 4px;
        }

    }
`
export const EnergyProviders = styled.div`
    
    

    max-width: 400px;
    display: flex-end;
    
    flex-wrap: wrap;
    justify-content: center;
    
    margin-top: 40px;
    
    div {
        color: #000000;
        display: flex-end;
        flex-direction: row;
        
    }

    a {
        background: #DCDCDC;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        align-items: center;
        
        transition: transform 0.3s;
        border: 1px solid #0000FF;


        & + a {
            margin-top: 16px;
        }
        
        &:hover {
            transform: translateX(10px);
            opacity: 0.8
            
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;
            

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
            }
        }

        svg {
            margin-left: auto;
            color: #0000FF;
        }   
    } 
`;
