import PostsListItem from './PostsListItem'

export default function PostsList({ posts }) {
    return (
        <>
            {posts?.map((post, index) => <PostsListItem key={index} {...post}/>)}
        </>
    )
}
