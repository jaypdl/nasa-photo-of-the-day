import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY,BASE_URL, Rover_URL } from './api_info';
import PhotoArea from './Components/PhotoArea';
import AbovePhoto from './Components/AbovePhoto';
import UnderPhoto from './Components/UnderPhoto';
import RoverPhotos from "./Components/RoverPhotos";
import styled from 'styled-components';


const MainContainer = styled.div`
  /* background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.tertiaryColor}; */
`

function App() {
  const [photoDetails, setPhotoDetails] = useState()
  const [roverPhotos, setRoverPhotos] = useState()
  

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setPhotoDetails(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.log(`There was a fetching error! ${err}`);
        debugger;
      });
  }, [])

  useEffect(() => {
    axios
      .get(`${Rover_URL}${API_KEY}`)
      .then(res => {
        setRoverPhotos(res.data.latest_photos);
        console.log(`🎃${res.data.latest_photos}🎃`);
      })
      // .then(()=> {
      //   console.log(roverPhotos);
      // })
      .catch(err =>{
        console.log(`Rover fetch error! ${err}`);
        debugger;
      })
  }, [])
  
// console.log(`💥 ${photoDetails}`);
if (!photoDetails) {
  return <h3>Loading...</h3>}
  return (
    <MainContainer className="App">
      <AbovePhoto photoDetails={photoDetails}/>
      <main className="apodFeatured">
        <PhotoArea photoDetails={photoDetails}/>
        <UnderPhoto photoDetails={photoDetails}/>
      </main>
      <footer>
        <RoverPhotos roverPhotos={roverPhotos}/>
      </footer>

    </MainContainer>
  );
}

export default App;
