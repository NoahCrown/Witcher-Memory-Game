import React from 'react'

const Game = ({characters, handleClick}) => {
    
    console.log(characters)
  return (
    <div className='bg-slate-700 text-white flex justify-center items-center pt-4 gap-3 flex-wrap' >
    {characters.map(val => {
        return (
            <div onClick={() => handleClick(val)} className='w-1/6 p-3 flex flex-col justify-center rounded-md items-center bg-slate-800 shadow-lg hover:shadow-red-500/70 cursor-pointer '>
                <img className='w-full aspect-square object-contain' src={val.src} alt={val.name}/>
                <p className='text-center text-2xl p-3'>{val.name}</p>
            </div>

        )
    })}

    </div>
  )
}

export default Game