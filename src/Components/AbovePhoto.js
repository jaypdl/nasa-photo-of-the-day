import React from 'react';

export default function AbovePhoto(props) {
    const { title, date } = props.photoDetails;
    console.log(props)
    return (
        <div className='above=photo'>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </div>
    )
}