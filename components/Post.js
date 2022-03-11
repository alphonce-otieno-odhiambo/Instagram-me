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
        <div>
            <img src='' alt=''/>
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