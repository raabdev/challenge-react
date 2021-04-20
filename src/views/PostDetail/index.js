import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import PostsContext from '../../context/posts'
import PostDetails from './components/PostDetails'

export default function PostDetail() {

    const { id } = useParams()
    const { postDetail, getPostDetail, isLoading } = useContext(PostsContext)

    useEffect(() => {
        getPostDetail(id)
    }, [])

    if (isLoading) return <p>Cargando resultados...</p>

    return (
        <div>
            { postDetail.title!==undefined ? <PostDetails {...postDetail} /> : <p>No se encontró el post</p> }
            <Link to={"/"}>
                <button className="btn light-blue darken-4">Back</button>
            </Link>
        </div>
    )
}
