import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY,BASE_URL } from './api_info';
import PhotoArea from './Components/PhotoArea';
import AbovePhoto from './Components/AbovePhoto';
import UnderPhoto from './Components/UnderPhoto';


function App() {
  const [photoDetails, setPhotoDetails] = useState({})
  

  useEffect(() => {
    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      .then(res => {
        setPhotoDetails(res.data);
      })
      .catch(err => {
        console.log(`There was a fetching error! ${err}`)
        debugger
      });
  }, [])

// console.log(`💥 ${photoDetails}`);
  return (
    <div className="App">
      <AbovePhoto photoDetails={photoDetails}/>
      <main className="apodFeatured">
        <PhotoArea photoDetails={photoDetails}/>
        <UnderPhoto photoDetails={photoDetails}/>
      </main>

    </div>
  );
}

export default App;
