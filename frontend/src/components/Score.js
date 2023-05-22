import React from 'react'

const Score = ({score, highestScore}) => {
  return (
    <div className='bg-slate-700 text-white flex flex-col justify-center items-center'>
    <div className='flex justify-around w-1/3'>
        <p>Score: {score} </p>
        <p>Best Score: {highestScore} </p>
    </div>
    <div>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
    </div>
    </div>
  )
}

export default Score