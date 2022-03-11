import React from 'react'

function Miniprofile() {
  return (
    <div className='flex items-center justify-between mt-12 ml-10'>
        <img className='object-contain rounded-full h-16 w-16 border p-[2px] '
             src="https://links.papareact.com/3ke" alt=''/>

             <div className='flex-1 mx-4'>
                 <h2 className='font-bold'>Alphonce</h2>
                 <h4 className='text-sm text-gray-400'>Welcome to instagram me</h4>
             </div>
             <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}

export default Miniprofile