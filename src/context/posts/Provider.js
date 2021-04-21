import { useState } from 'react'
import PostsContext from './index'
import apiCall from '../../api'

export default function PostsProvider({ children }) {
    
    const [posts, setPosts] = useState([])
    const [postDetail, setPostDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const getPosts = async () => {
        try{
            setIsLoading(true)
            const postsResult = await apiCall({ url: "https://jsonplaceholder.typicode.com/posts" })
            setPosts(postsResult)
        } catch (error) {
            setPosts([])
            setErrorMessage("Something has happened, check your connection")
            setHasError(true)
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
            setErrorMessage("Something has happened, check your connection")
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }

    const newPost = async (title, body) => {
        console.log("new post has been created")
        try{
            const postNew = await apiCall({ url: "https://jsonplaceholder.typicode.com/posts",
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: { 'Content-Type': 'application/json' }})
            const newArr = [...posts,postNew]
            setPosts(newArr)
        } catch (error) {
            console.log(error);
        }
    }

    const editPost = async (id, title, body) => {
        try{
            const postEdited = await apiCall({ url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: { 'Content-Type': 'application/json' }})
            const result = posts.filter(item => Number(item.id) !== Number(id))
            const finalArr = [...result, postEdited]
            setPosts(finalArr)
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = (id) => {
        const postsArr = posts.filter(item => item.id !== id)
        setPosts(postsArr)
    }

    return(
        <PostsContext.Provider value={{
            posts,
            getPosts,
            postDetail,
            getPostDetail,
            isLoading,
            newPost,
            editPost,
            deletePost,
            hasError,
            errorMessage
        }}>
            { children }
        </PostsContext.Provider>
    )
}