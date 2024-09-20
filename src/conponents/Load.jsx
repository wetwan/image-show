// import React from 'react'

const Load = ({img, changeBigImage,bigImg}) => {
  const handleClick =() =>{
        if(bigImg !== img.image) {
            changeBigImage(img.image)
        }
    }
  return (
    
    <div 
        className={`w-2/6 rounded-lg 
            ${bigImg === img  
                ? 'border-blue-700 border ' 
                : 'border-transparent'}
            cursor-pointer ` }
        onClick={handleClick}
    >
   <img 
        src={img.image} 
        alt={img.image} 
        width={600}
        height={600}
        className="w-fit h-fit mx-auto rounded-lg"
        />
      
    </div>
  )
}

export default Load