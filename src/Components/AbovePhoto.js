import React from 'react';
import styled, { keyframes } from 'styled-components';

const Header = styled.header `
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.tertiaryColor};
`
const kf = keyframes `
    0% {
        opacity:0;
        position: relative;
        top:300px;
        right:300px;
        font-size:1em;
    }
    80% {
        opacity: 1;
        position: relative;
        top:0px;
        right:0px;
        font-size:1em;
    }
    100% {
        font-size:2em;
    }
`

const TitleH1 = styled.h1`
    color: ${pr => pr.theme.secondaryColor};
    span{
        font-size: 2em;
        animation: ${kf} 3s ease-in-out;
    }
`

export default function AbovePhoto(props) {
    const { title, date } = props.photoDetails;
    return (
        <Header className='above=photo'>
            <TitleH1>NASA: Astronomy Picture of the Day <span role="img" aria-label="rocket">🚀</span></TitleH1>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </Header>
    )
}