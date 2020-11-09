import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Footer = styled.footer `
    margin-top: 2%;
    display:flex;
    justify-content: space-evenly;
    img {
        width: 25% ;
        border-radius: 15%;
        border-style: dotted;
        color: ${pr => pr.theme.secondaryColor};
    }
`

export default function RoverPhotos(props) {
    const { roverPhotos } = props
    const [roverArr, setRoverArr] = useState([])
    // console.log(`💥${props.roverPhotos}💥`)
    
    // /* useEffect(() => {
    //     for (let i = 0; i < 5; i++){
    //         setRoverArr([...roverArr, roverPhotos[i]]);
    //     }
    // },[roverPhotos])

    // setRoverArr(for (let i = 0; i < 5; i++){
    //     return
    // }) */
    // console.log(`yarr `)
    
    // useEffect(() => {
    //     if (roverPhotos !== []){
            
    //         setRoverArr(roverPhotos.map(photo => {
    //             return photo.img_src
    // }))}
    // },[roverPhotos])
    console.log(roverArr)
    if (!props.roverPhotos) {
        return <h3>Loading...</h3>}
    return (
        <Footer>
            <img src={roverPhotos[0].img_src} alt='Rover cam'/>
            <img src={roverPhotos[7].img_src} alt='Rover cam'/>
            <img src={roverPhotos[15].img_src} alt='Rover cam'/>
        </Footer>
    )
}