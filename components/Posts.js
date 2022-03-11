import React from 'react'
import Post from './Post'


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