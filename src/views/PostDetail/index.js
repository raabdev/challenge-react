import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'

import PostsContext from '../../context/posts'
import PostDetails from './components/PostDetails'

export default function PostDetail() {

    const { id } = useParams()
    const { postDetail, getPostDetail, isLoading, errorMessage } = useContext(PostsContext)

    useEffect(() => {
        getPostDetail(id)
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            { postDetail.id!==undefined ? <PostDetails {...postDetail} /> : <p>Post not found</p> }
            <Link to={`/edit/${id}`}>
                <button className="btn light-blue darken-4" style={{marginRight: "8px"}} >Edit</button>
            </Link>
            <Link to={"/"}>
                <button className="btn light-blue darken-4">Back</button>
            </Link>
        </div>
    )
}
