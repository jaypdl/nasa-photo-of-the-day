import React from 'react';

export default function UnderPhoto(props) {
    const { explanation } = props.photoDetails;
    return (
        <div className='under-photo'>
            <p>
                {explanation}
            </p>
        </div>
    )
}