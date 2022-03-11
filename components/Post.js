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
    <div>
        <h1>I im a post</h1>
        {/**header */}
        <div className='flex items-center p-5'>
            <img className='object-contain rounded-full h-12 w-12 border p-1 mr-3'
             src={userImg} alt=''/>
            <p>{username} </p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        {/**image */}
        {/**button */}
        {/**caption */}
        {/**contents */}
        {/**input field */}
        
    </div>
  )
}

export default Post