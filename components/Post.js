import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
    
  } from "@heroicons/react/outline";
  import { HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
function Post({id,username,userImg,img ,caption}) {
  return (
    <div className='bg-white my-7 border p-0 '>
       
        {/**header */}
        <div className='flex items-center p-5'>
            <img className='object-contain rounded-full h-12 w-12 border p-1 mr-3'
             src={userImg} alt=''/>
            <p className='flex-1 font-bold'>{username} </p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        {/**image */}
        <img src={img} className="object-cover w-full" alt=''/>
        {/**button */}
        <div className='flex justify-between px-4 pt-4 p-3'>
            <div className='flex space-x-3 '>
                <HeartIcon className='btn'/> 
                <ChatIcon className='btn'/>
                <PaperAirplaneIcon className='btn'/>
            </div>
            <BookmarkIcon className='btn'/>          
        </div>
        {/**caption */}
        <p className='p-5 trancate'>
            <span className='font-bold mr-1'>{username} </span> {caption}
        </p>
        {/**contents */}
        {/**input field */}
        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-6'/>
            <input type="text" className='border-none flex-1 focus:ring-0 outline-none'
            placeholder='Add a comment...'/>
            <button>Post</button>
        </form>
        
    </div>
  )
}

export default Post