import React, { useContext, useState, useEffect } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../Store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import Loading from './Loading'

export default function PostList() {

  const {postList, fetchData} = useContext(PostListData)

  return (
    <div className='post-list'>
      {fetchData && <Loading/>} 
      {!fetchData && postList.length === 0 ? <WelcomeMessage/> :
      postList.map((post) =>{
          return <Post key={post.id} post={post}/>
        })
      }
    </div>

  )
}
