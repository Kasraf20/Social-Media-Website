import React, { useContext } from 'react'
import { PostList } from '../Store/post-list-store'

export default function Post({ post }) {

  const {deletePost} = useContext(PostList)

  const handleOnDelete = (e) =>{
    deletePost(post.id)
  }

  return (
    <div className='post-card'>
      <div className="card" style={{ width: "500px", margin: "10px"  }}>
        <div className="card-body">
        <button onClick={handleOnDelete} type="button" className="btn btn-danger delete-button">
          Delete 
        </button>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <button type="button" className="btn btn-primary position-relative">
            Reaction
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reactions}
            </span>
          </button>
          <div className="tags">
          {post.tags.map((tag) => {
            return <span key={tag} className="badge text-bg-light">{tag}</span>
          })}
          </div>
          

        </div>
      </div>
    </div>
  )
}
