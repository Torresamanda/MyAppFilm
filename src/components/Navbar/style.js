import styled from "styled-components"

export const Header = styled.header`
    max-width: 1080px;
    margin: 0 auto;
    padding: 40px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    text-transform: uppercase;
`

export const Title = styled.a`
    font-weight: bold;
    font-size: 28px;
    margin-top: 5px;
    text-decoration: none;
    color: #FFF;
`

export const RenderMovie = styled.section`
    background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50));
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
`

export const Form = styled.form`
    position: relative;
    margin-top: 8px;
    margin-bottom: 5px;
`

export const Search = styled.input`
    border: 1px solid;
    background-color: transparent;
    padding: 5px 10px;
    border-radius: 25px;
    color: white;
`

export const RandomButton = styled.button`
    margin-right: 20px;
    width: 145px;
    height: 30px;

    background: #e9e6e3;
    color: #0F1014;

    text-align: center;
    float: left;
    position: relative;
    padding: 0;
    cursor: pointer;
    transition: box-shadow 0.2s;
    border: none;
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }
`

export const RandomImage = styled.img`
    margin-top: -2px;
    margin-right: 12px;
    width: 18px;
`

export const SubmitSearchButton = styled.button`
    position: absolute;
    right: 12px;
    top: -1px;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;

    height: 30px;
`

export const Img = styled.img`
    width: 15px;
`