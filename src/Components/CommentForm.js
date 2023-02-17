import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CommentForm(props) {
    let { id } = useParams()
    const { commentDetails } = props

    const [comment, setComment] = useState({
        commenter: '',
        rating: 0,
        content: '',
        wrestler_id: id
    })

    const handleTextChange = (event) => {
        setComment({ ...comment, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        if (commentDetails) {
            setComment(commentDetails)
        }
    }, [id, commentDetails, props])

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleSubmit(comment, id)
        if (commentDetails) {
            props.toggleView()
        }
        setComment({
            commenter: '',
            rating: 0,
            content: '',
            wrestler_id: id
        })
    }

    return (
        <div className='edit'>
            {props.children}
            <form onSubmit={handleSubmit}>

                <label htmlFor='commenter'>Name:</label>
                <input
                id='commenter'
                value={comment.commenter}
                type='text'
                onChange={handleTextChange}
                required
                />

                <label htmlFor='rating'>Rating:</label>
                <input
                id='rating'
                type='number'
                name='rating'
                min='0'
                max='10'
                step='1'
                value={comment.rating}
                onChange={handleTextChange}
                required
                />

                <label htmlFor='content'>Comment:</label>
                <input
                id='content'
                name='content'
                value={comment.content}
                type='text'
                onChange={handleTextChange}
                required
                />

                <br />

                <input type='submit' />
            </form>
        </div>
    )
}

export default CommentForm;