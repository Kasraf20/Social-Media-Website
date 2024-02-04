import { createContext, useReducer, useEffect, useState } from "react";

export const PostList = createContext({
    postList : [],
    fetchData :false,
    addPost : () =>{},
    deletePost: () =>{}
})


const postListReducer = (currPostList,action) =>{
    let addNewPost = currPostList;
    if(action.type === 'ADD_POST')
    {
        addNewPost = [action.payload,...currPostList]
        console.log('one new post added.')
    }else if(action.type === 'DELETE_POST'){
        addNewPost = currPostList.filter((post) =>{
            return post.id !== action.payload.deletePostId})
    }else if(action.type === 'MULTIPLE_POSTS'){
        addNewPost = action.payload.fetchedPost
    }
     
    return addNewPost
}

const PostListProvider = ({children}) =>{

    const [postList ,dispatchPostList] = useReducer(postListReducer,[])
    const [fetchData, setFetchData] = useState(false)

    const addPost = (post) =>{
        const newPostAdd = {
            type: 'ADD_POST',
            payload : post
        }
        dispatchPostList(newPostAdd)
    }

    const deletePost = (deletePostId) =>{
        const deleteNewPost = {
            type: 'DELETE_POST',
            payload:{
                deletePostId,
            }
        }
        dispatchPostList(deleteNewPost)
    }


    const initialPost = (fetchedPost) => {
        dispatchPostList({
            type:'MULTIPLE_POSTS',
            payload: {
                fetchedPost,
            }
        })
    }

    const doSomething = async() => {
        setFetchData(true)
        let res = await fetch('https://dummyjson.com/posts')
        let data = await res.json()
        initialPost(data.posts)
        setFetchData(false)
      }
      
      useEffect(()=>{doSomething()},[])


    return (
        <PostList.Provider value={{postList, fetchData, addPost, deletePost}}>{children}</PostList.Provider>
    );
}




export default PostListProvider
