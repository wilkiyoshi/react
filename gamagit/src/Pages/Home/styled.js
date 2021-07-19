import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #ddd;
    height:1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
`;

export const Button = styled.button`
    height:1.5rem;
    border: 1px solid 000;
    background:#000;
    color:#fff;
    border-radius: 0 .25rem .25rem 0;
`;

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const Erromsg = styled.span`
    display:block;
    font-size: 0.65rem;
    color:red;
    font-weight:600;
    margin-left: 10px;
`