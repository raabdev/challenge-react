import { useState, useContext } from 'react'

import PostsContext from '../../context/posts'

export default function NewPost() {

    const { newPost } = useContext(PostsContext)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    
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
        alert("New post created!")
    }

    const resetForm = () => {
        setTitle("")
        setBody("")
    }

    return (
        <form onSubmit={handleSubmit} style={{marginTop: "15px"}}>
            <label>Title</label>
            <input placeholder="Write a title" type="text" onChange={handleChangeTitle} value={title} required />
            <label>Body</label>
            <input placeholder="Write a body" type="text" onChange={handleChangeBody} value={body} required />
            <button className="btn light-blue darken-4" onClick={resetForm} style={{marginRight: "8px"}}>Reset</button>
            <input type="submit" className="btn light-blue darken-4" value="Submit" style={{marginRight: "8px"}}/>
        </form>
    )
}
