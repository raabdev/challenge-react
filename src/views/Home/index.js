import { useContext, useEffect } from 'react'

import PostsContext from '../../context/posts'
import PostsList from './components/PostsList'
import ErrorMessage from '../../components/ErrorMessage'

export default function Home() {

    const { posts, getPosts, isLoading, hasError, errorMessage } = useContext(PostsContext)

    useEffect(() => {
        getPosts()
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            {hasError ? <ErrorMessage message={errorMessage}/> : <PostsList posts={posts} />}
        </>
    )
}