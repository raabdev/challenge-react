import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import PostsContext from '../../context/posts'

export default function EditPost() {

    const { id } = useParams()

    const { editPost, getPostDetail, postDetail } = useContext(PostsContext)
    
    const [isEditing, setIsEditing] = useState(true)
    
    useEffect(() => {
        getPostDetail(id)
    }, [])

    const [title, setTitle] = useState(postDetail.title)
    const [body, setBody] = useState(postDetail.body)
    
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeBody = (event) => {
        setBody(event.target.value)
    }

    const handleEditSubmit = async (event) => {
        event.preventDefault()
        await editPost(id, title, body)
        resetForm()
        setIsEditing(false)
    }

    const resetForm = () => {
        setTitle("")
        setBody("")
    }

    if (!isEditing) {
        return(
            <>
                <p>The post has been edited.</p>
                <Link to={"/"}>
                    <button onClick={() => setIsEditing(true)} className="btn light-blue darken-4">Back</button>
                </Link>
            </>
        )
    }

    return (        
        <form onSubmit={handleEditSubmit} style={{marginTop: "15px"}}>
            <label>Title</label>
            <input placeholder="Write a title" type="text" onChange={handleChangeTitle} value={title} required />
            <label>Body</label>
            <input placeholder="Write a body" type="text" onChange={handleChangeBody} value={body} required />
            <button className="btn green darken-4" onClick={resetForm} style={{marginRight: "8px"}}>Reset</button>
            <input type="submit" className="btn light-blue darken-4" value="Submit" style={{marginRight: "8px"}}/>
            <Link to={"/"}>
                <button className="btn red darken-4">Cancel</button>
            </Link>
        </form>
    )
}