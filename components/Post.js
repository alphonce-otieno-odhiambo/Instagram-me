import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
    
  } from "@heroicons/react/outline";
  import { HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useState , useEffect} from 'react';
import { db} from '../firebase';
  
function Post({id,username,userImg,img ,caption}) {
    const {data:session } = useSession();
    const [comment, setComment ] = useState("");
    const [comments, setComments ] = useState([]);

    useEffect(
        () =>onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'),
                 orderBy('timestamp', 'desc')
                 ),
                 snapshot => setComments(snapshot.docs)
                 ) ,
                 [db]);
    

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment("");

        await addDoc(collection(db, 'posts', id, 'comments'),{
            comment:commentToSend,
            username: session.user.username,
            userImg:session.user.image,
            timestamp:serverTimestamp(),
        })
    }
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
        {session && (
            <div className='flex justify-between px-4 pt-4 p-3'>
            <div className='flex space-x-3 '>
                <HeartIcon className='btn'/> 
                <ChatIcon className='btn'/>
                <PaperAirplaneIcon className='btn'/>
            </div>
            <BookmarkIcon className='btn'/>          
        </div>
        )}
        
        {/**caption */}
        <p className='p-5 trancate flex  space-x-2  items-center'>
            <img className='h-7 rounded-full' src={userImg} alt=""/>
            <span className='font-bold mr-1'>{username} </span> {caption}
        </p>
        {/**contents */}
        {comments.length > 0 && (
            <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                {comments.map(comment => (
                    <div key={comment.id} className="flex items-center space-x-2 mb-3">
                        <img className='h-7 rounded-full' src={comment.data().userImg} alt=""/>
                        <p><span className='font-bold'>{comment.data().username} </span>  {comment.data().comment} </p>
                    </div>
                ))}
            </div>
        )}
        {/**input field */}
        {session && (
            <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-6'/>
            <input 
            onChange={e => setComment(e.target.value)}
            value={comment} type="text" className='border-none flex-1 focus:ring-0 outline-none'
            placeholder='Add a comment...'/>
            <button onClick={sendComment} type='submit' disabled={!comments} >Post</button>
        </form>
        )}
        
        
    </div>
  )
}

export default Post