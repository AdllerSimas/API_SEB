import styled from 'styled-components';
import { shade } from 'polished';


export const Header = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.5s;

        &:hover {
           color: #666; 
        }

        svg {
            margin-right: 4px;
        }

    }
`

export const Title = styled.h1`
    font-size : 48px;
    color : #3A3A3A;
    max-width: 550px;
    line-height: 56px; 

    margin-top: 80px;
`;

export const SubTitle = styled.h1`
    
    font-size : 32px;
    color : #3A3A3A;
    max-width: 650px;
    line-height: 36px; 

    margin-top: 80px;
`;

export const Button = styled.div`
        
        margin-top: 40px;
        max-width: 700px;
        display: flex;
        align-items: center;
        

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

export const Table = styled.div`

    margin-top: 50px;
    
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    color: #000000;

    table {
        
        border-collapse: collapse;
        width: 90%;
        background-color: #D3D3D3;
        

        td, th {
            
            padding-top: 12px;
            border: 1px solid #0000FF;
            padding: 8px;
            text-align: center;
            color: #000000;

        }

        tr {
        
            &:hover { background-color: #A9A9A9}
        
        }

        th {

            padding-top: 12px;
            padding-bottom: 12px;
            color: #000000;
        
        }
    }

    

    
`