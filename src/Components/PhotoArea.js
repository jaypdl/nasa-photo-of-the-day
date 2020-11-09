import React from 'react';
import styled from 'styled-components';

const PhotoCont = styled.div `
    color: ${pr => pr.theme.tertiaryColor};
    img {
    border-radius: 15%;
    border-style: dotted;
    max-width: 80%;
    }
    `

export default function PhotoBox(props) {
    const { url, title } = props.photoDetails
    
    return (
        <PhotoCont className='photoBox'>
            <img src={url} alt={title} />
        </PhotoCont>
    )
}