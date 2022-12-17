import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem 3rem;
    padding: 2rem 3rem;
    display: wrap;
    border-radius: 20px;
    background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50));

    .youtube-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .movie {
        display: block;
    }
`

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Imagem = styled.img`
    width: 300px;
    border-radius: 1rem;
    margin-bottom: 2rem;
`

export const ImgRandom = styled.img`
    margin-top: -2px;
    margin-right: 12px;
    width: 18px;
`
export const SectionDetails = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
`
export const H1 = styled.h1`
   margin: 3rem 0;
`
export const Sinopse = styled.p`
    color: #b3b3b3;
`
export const ContainerBtns = styled.section`
    display: inline;
    justify-content: space-between;
`

export const Button = styled.button`
    margin-right: 45px;
    margin-top: 25px;

    width: 155px;
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
        box-shadow: 0 2px 2px rgba(255, 254, 254, 0.5);
    }
`

export const SectionVideo = styled.section`
    position: relative;
    min-height: 450px;
    margin-top: 15px;
    align-items: center;
`

export const TextNoTrailer = styled.section`
    min-height: 450px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
