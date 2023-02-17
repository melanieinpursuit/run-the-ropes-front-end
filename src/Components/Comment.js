import { useState } from "react";
import CommentForm from "./CommentForm";

function Comment ({ comment, handleDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false)

    const toggleView = () => {
      toggleEditForm(!viewEditForm)
    }

    const { commenter, rating, content, id } = comment;
  
  return (
    <div className="comment">
      {viewEditForm ? (
      <CommentForm 
        commentDetails={comment}
        toggleView={toggleView}
        handleSubmit={handleSubmit} 
        />
        ) : (
        
        <div>
          <h4>
          {commenter}
          </h4>
          <h6>
            {rating}
          </h6>
          <h5>
            {content}
          </h5>
          <button onClick={toggleView}>Edit Comment</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
          
          )}
          </div>
    )
}

export default Comment;