import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div `
    color: ${pr => pr.theme.tertiaryColor};
    display: flex;
    justify-content: center ;
    p {
        max-width: 60%;
    }
`

export default function UnderPhoto(props) {
    const { explanation } = props.photoDetails;
    return (
        <ContentDiv className='under-photo'>
            <p>
                {explanation}
            </p>
        </ContentDiv>
    )
}