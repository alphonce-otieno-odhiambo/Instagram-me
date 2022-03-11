import React from 'react'
import Post from './Post'


const posts = [
  {
id:"123",
usename: "alphonce",
userImg:"https://links.papareact.com/3ke" ,
img :"https://links.papareact.com/ocw",
caption :"Subscribe and destroy the like btn"

},
{
  id:"123",
  usename: "alphonce",
  userImg:"https://links.papareact.com/3ke" ,
  img :"https://links.papareact.com/ocw",
  caption :"Subscribe and destroy the like btn"
  
  }
]

function Posts() {

  return (
    <div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Posts