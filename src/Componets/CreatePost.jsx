import React, { useContext, useRef } from 'react'
import { PostList as PostListData } from '../Store/post-list-store'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
    
    const {addPost} = useContext(PostListData)
    const navigate = useNavigate()

    const userIdElement = useRef('')
    const titleElement = useRef('')
    const bodyElement = useRef('')
    const reactionElement = useRef('')
    const tagsElement = useRef('')


    const handleAddPost = (e) =>{
        e.preventDefault()
        const userId = userIdElement.current.value
        const title = titleElement.current.value
        const body = bodyElement.current.value
        const reactions = reactionElement.current.value
        const tags = tagsElement.current.value.split(" ")

        userIdElement.current.value = ""
        titleElement.current.value = ""
        bodyElement.current.value = ""
        reactionElement.current.value = ""
        tagsElement.current.value = ""

        const handleSinglePost = async ()=>{
            let res = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId,
                title,
                body,
                reactions,
                tags,
            })
            })

            let post = await res.json()
            addPost(post)
            navigate('/') 
        }
        
        handleSinglePost()
    }


    return (
        <div className='create-post'>
            <form>

                <div className="mb-3">
                    <label htmlFor="exampleInputuserId" className="form-label">UserId</label>
                    <input type="text" className="form-control" id="exampleInputuserId" aria-describedby="emailHelp"
                    ref={userIdElement}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputtitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputtitle" aria-describedby="emailHelp"
                    ref={titleElement}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputbody" className="form-label">Body</label>
                    <textarea type="text" className="form-control" id="exampleInputbody" 
                    ref={bodyElement}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputreaction" className="form-label">Reactions</label>
                    <input type="text" className="form-control" id="exampleInputraction" aria-describedby="emailHelp"
                    ref={reactionElement}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputtags" className="form-label">Hastags</label>
                    <input type="text" className="form-control" id="exampleInputtags" 
                    ref={tagsElement}/>
                </div>
                <button type="submit" className="btn btn-primary" 
                onClick={handleAddPost}>Post</button>
            </form>
        </div>
    )
}

