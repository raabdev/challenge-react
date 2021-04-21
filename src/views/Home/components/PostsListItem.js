import { Link } from 'react-router-dom'
import PostsContext from '../../../context/posts'
import { useContext } from 'react'

export default function PostsListItem({ title, id }) {
    
    const { deletePost } = useContext(PostsContext)
    
    return (
        <div className="card" style={{padding: "8px"}}>
            <p>{title}</p>
            <Link to={`/post/${id}`}>
                <button className="btn light-blue darken-4" style={{marginRight: "8px"}}>Details</button>
            </Link>
            <Link to={`/edit/${id}`}>
                <button className="btn light-blue darken-4" style={{marginRight: "8px"}} >Edit</button>
            </Link>
            <button onClick={() => deletePost(id)} className="btn red darken-4" style={{marginRight: "8px"}} >Delete</button>
        </div>
    )
}
