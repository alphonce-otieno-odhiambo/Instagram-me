import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperClipIcon,
    
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
        {/**caption */}
        {/**contents */}
        {/**input field */}
        
    </div>
  )
}

export default Post