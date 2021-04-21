import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import PostsContext from '../../context/posts'

export default function NewPost() {

    const { newPost } = useContext(PostsContext)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isEditing, setIsEditing] = useState(true)
    
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeBody = (event) => {
        setBody(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await newPost(title, body)
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
                <p>The post has been created.</p>
                <Link to={"/"}>
                    <button onClick={() => setIsEditing(true)} className="btn light-blue darken-4">Back</button>
                </Link>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit} style={{marginTop: "15px"}}>
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
