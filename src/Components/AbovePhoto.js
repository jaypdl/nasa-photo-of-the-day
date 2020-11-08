import React from 'react';

export default function AbovePhoto(props) {
    const { title, date } = props.photoDetails;
    console.log(props)
    return (
        <header className='above=photo'>
            <h1>NASA Photo of the Day <span role="img" aria-label>🚀</span></h1>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </header>
    )
}