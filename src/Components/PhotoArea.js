import React from 'react';

export default function PhotoBox(props) {
    const { url, title } = props.photoDetails
    return (
        <div className='photoBox'>
            {props.photoDetails
            ? <img src={url} alt={title} />
            : 'Loading...' }
            
        </div>
    )
}