import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'

const API = process.env.REACT_APP_BASE_URL

function Comments () {
    const [comments, setComments] = useState([])
    let { id } = useParams();
    
    const handleAdd = (newComment) => {
        axios
        .post(`${API}/wrestlers/${id}/comments`, newComment)
        .then(
            (response) => {
                setComments([response.data, ...comments])
            },
            (error) => console.error(error)
            )
            .catch((c) => console.warn('catch', c))
        }
        
        const handleEdit = (updatedComment) => {
            axios
            .put(`${API}/wrestlers/${id}/comments/${updatedComment.id}`, updatedComment)
            .then((response) => {
                const copyCommentArray = [...comments];
                const indexUpdatedComment = copyCommentArray.findIndex((comment) => {
                    return comment.id === updatedComment.id
                })
                copyCommentArray[indexUpdatedComment] = response.data
                setComments(copyCommentArray)
            })
            .catch((c) => console.warn('catch', c))
        }
        
        const handleDelete = (id) => {
            axios
            .delete(`${API}/wrestlers/${id}/comments/${id}`)
            .then(
                (response) => {
                    const copyCommentArray = [...comments]
                    const indexDeletedComment = copyCommentArray.findIndex((comment) => {
                        return comment.id === id
                    })
                    copyCommentArray.splice(indexDeletedComment, 1)
                    setComments(copyCommentArray)
                },
                (error) => console.error(error)
                )
                .catch((c) => console.warn('catch', c))
            }
            
            
            useEffect(() => {
                axios
                .get(`${API}/wrestlers/${id}/comments`)
                .then((response) => {
                    console.log(response.data)
                    setComments(response.data)
                })
            }, [id])

            return (
                <section>
            <h2>Comments</h2>
            <CommentForm handleSubmit={handleAdd}>
                <h3>Got something to say?</h3>
            </CommentForm>
            {comments.map((comment) => (
                <Comment
                key={comment.id}
                comment={comment}
                handleSubmit={handleEdit}
                handleDelete={handleDelete} />
                ))}
        </section>
    )
}

export default Comments;