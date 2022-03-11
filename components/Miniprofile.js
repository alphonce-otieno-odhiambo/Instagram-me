import React from 'react'

function Miniprofile() {
  return (
    <div className='flex items-center justify-between mt-12 ml-10'>
        <img className='object-contain rounded-full h-16 w-16 border p-[2px] '
             src="https://links.papareact.com/3ke" alt=''/>
             
             <div>
                 <h2>Alphonce</h2>
                 <h4>Welcome to instagram me</h4>
             </div>
             <button>Sign out</button>
    </div>
  )
}

export default Miniprofile