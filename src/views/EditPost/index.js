import { useState, useContext, useEffect } from 'react'

import PostsContext from '../../context/posts'

export default function EditPost() {

    const { id } = useParams()

    const { editPost, getPostDetail, postDetail } = useContext(PostsContext)
    
    useEffect(() => {
        getPostDetail(id)
    }, [])

    const [title, setTitle] = useState(postDetail.title)
    const [body, setBody] = useState(postDetail.body)

    console.log(title)
    
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