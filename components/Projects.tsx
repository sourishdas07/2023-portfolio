import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl'>My Projects</h3>
    </div>
  )
}

export default Projects