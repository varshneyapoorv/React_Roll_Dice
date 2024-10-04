import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'

function GamePlay() {
  return (
    <main className='font-bold '>
        <div className='flex items-end mt-16'>
          <div className='ml-48'>
        <TotalScore/>

          </div>
        <div className='ml-[700px]'>
        <NumberSelector/>

        </div>

        </div>
        <RoleDice/>
    </main>
  )
}

export default GamePlay
