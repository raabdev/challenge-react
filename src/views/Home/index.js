import { useContext, useEffect } from 'react'

import PostsContext from '../../context/posts'
import PostsList from './components/PostsList'

export default function Home() {

    const { posts, getPosts, isLoading } = useContext(PostsContext)

    useEffect(() => {
        getPosts()
    }, [])

    if (isLoading) return <p>Cargando resultados...</p>

    return (
        <>
            <PostsList posts={posts} />
        </>
    )
}