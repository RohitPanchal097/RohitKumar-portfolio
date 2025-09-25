import React from 'react'
import { useState, useEffect } from 'react';
    
const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() =>{
        generateStars();
        generateMeteors();
    },[]);
    // Generate stars
    const generateStars = () =>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = []

        for(let i = 0; i < numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, 
            })
        }
        setStars(newStars);
    }

    // Meteor effect
     // Generate meteors
     const generateMeteors = () =>{
      const numberOfMeteors = 4
      const newMeteors = []

      for(let i = 0; i < numberOfMeteors; i++){
          newMeteors.push({
              id: i,
              size: Math.random() * 2 + 1,
              x: Math.random() * 100,
              y: Math.random() * 20, // Random vertical position
              delay: Math.random() * 15, // Longer delays between meteors
              animationDuration: Math.random() * 3 + 3, // 3-5 seconds
          })
      }
      setMeteors(newMeteors);
  }

  return (
    <div
    className='fixed inset-0 overflow-hidden pointer-events-none z-0'
    >
        {stars.map((star)=>{
            return <div key={star.id}
            className='star animate-pulse-subtle'
            style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`,
                left: `${star.x}%`,
                top: `${star.y}%`,
            }} />
        })}

    {meteors.map((meteor)=>{
        return <div key={meteor.id}
        className='meteor animate-meteor'
        style={{
            width: `${meteor.size * 50}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
        }} />
    })}
    </div>
  )
}

export default StarBackground