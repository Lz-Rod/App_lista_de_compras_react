import styled from  'styled-components'

export const Container = styled.div `
    background: #4b4a4b;
    padding: 20px;
    border-radius: 10px;
    h1 {
        color: #fff;
        text-align: center;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 15px;
        outline: none;
        padding-left: 10px;
        width: 60%;
    }
`

export const AddButton = styled.button `
    background: #48c2e7;
    color: #000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 2%;
    width: 38%;
    font-weight: 700;

    &:hover {
        opacity: 0.8;
    }
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #eeeeee;
    border-radius: 5px;
    margin-top: 5px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 14px;
    }
`

export const DeleteButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
`
