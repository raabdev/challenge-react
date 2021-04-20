import { useState } from 'react'
import PostsContext from './index'
import apiCall from '../../api'

export default function PostsProvider({ children }) {
    
    const [posts, setPosts] = useState([])
    const [postDetail, setPostDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getPosts = async () => {
        try{
            setIsLoading(true)
            const postsResult = await apiCall({ url: "https://jsonplaceholder.typicode.com/posts" })
            setPosts(postsResult)
        } catch (error) {
            setPosts([])
        } finally {
            setIsLoading(false)
        }
    }

    const getPostDetail = async (id) => {
        if (!id) Promise.reject("Id es requerido")
        try{
            setIsLoading(true)
            const detail = await apiCall({ url: `https://jsonplaceholder.typicode.com/posts/${id}` })
            setPostDetail(detail)
        } catch (error) {
            setPostDetail({})
        } finally {
            setIsLoading(false)
        }
    }

    const newPost = async (title, body) => {
        console.log("se ha creado un nuevo post")
        try{
            const postNew = await apiCall({ url: "https://jsonplaceholder.typicode.com/posts",
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: { 'Content-Type': 'application/json' }})
            setPosts([...posts, postNew])
        } catch (error) {
            console.log(error);
        }
    }

    const editPost = async (title, body) => {
        console.log("se ha creado un nuevo post")
        try{
            const postNew = await apiCall({ url: "https://jsonplaceholder.typicode.com/posts",
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: { 'Content-Type': 'application/json' }})
            setPosts([...posts, postNew])
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <PostsContext.Provider value={{
            posts,
            getPosts,
            postDetail,
            getPostDetail,
            isLoading,
            newPost
        }}>
            { children }
        </PostsContext.Provider>
    )
}