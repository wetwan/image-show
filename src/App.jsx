// import React from 'react'
import { Ab } from "./assets/image"
import Load from "./conponents/Load"
import { images } from "./data/data"
import { useState } from "react"


// 
const App = () => {
 const [bigImage, setBigImage] = useState(Ab)
  return (
   <main className="text-white w-[600px] h-[600px] mx-auto my-2 p-0.5"> 
      <div className="w-11/12 h-3/5 rounded-md mx-auto my-1 flex-grow">
      <img src={bigImage} 
        alt={bigImage} 
        width={600} 
        height={600} 
          className=" h-[80%] w-11/12 my-2  rounded-lg"
      />
      </div>
      <div className="space-x-2 px-1 justify-center items-center w-5/6 h-[25%] flex mx-auto">
        {images.map((img,i) =>(
     
            <Load
              key={i} 
              img={img}
              changeBigImage ={(img)=>setBigImage (img)}
              bigImg={bigImage} />
        
        ))}
     
      </div>

   </main>
  )
}

export default App