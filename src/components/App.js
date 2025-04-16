// create your App component 
import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
    const [imageURL,setImageURL]=useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=>resp.json())
        .then((data)=>{
            setImageURL(data.message);

            console.log(data.message)
        })
    })
  return (
    <div>
      {imageURL ? <img src={imageURL} alt="A Random Dog"/> : <p>Loading...</p>}
    </div>
  )
}

export default App
