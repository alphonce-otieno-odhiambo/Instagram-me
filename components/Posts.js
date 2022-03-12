import React from 'react'
import Post from './Post'
import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';


const posts = [
  {
id:"123",
username: "alphonce",
userImg:"https://links.papareact.com/3ke" ,
img :"https://links.papareact.com/ocw",
caption :"Subscribe and destroy the like btn"

},
{
  id:"123",
  username: "alphonce",
  userImg:"https://links.papareact.com/3ke" ,
  img :"https://links.papareact.com/3ke",
  caption :"Subscribe and destroy the like btn"
  
  }
]

function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
   const unsubscribe = onSnapshot(query (collection(db, 'posts'), orderBy('timestamp', 'desc')),snapshot => {
        setPosts(snapshot.docs)
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div>
      {
        posts.map((post)=> (
          <Post key={post.id} id={post.id}
           username={post.username}
           userImg={post.userImg}
           img={post.img} 
           caption={post.caption} />
        ))
      }
     
      
      
    </div>
  )
}

export default Posts