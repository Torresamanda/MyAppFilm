import styled from "styled-components";

export const ContainerMovie = styled.main`
    position: relative;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
`

export const Title = styled.h5`
    margin: 0;
    font-size: 13px;
`
export const SectionInfos = styled.section`
    padding: 15px 0;
`

export const MovieVoting = styled.span`
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: #F6BE27;
    color: #0F1014;
    font-weight: bold;
    border: 1px solid gray;
    padding: 10px;
    font-size: 12px;
    border-radius: 25px;
`

export const Imagem = styled.img`
    max-width: 100%;
    border-radius: 1rem;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

`