import { Link } from 'react-router-dom'

export default function PostsListItem({ title, id }) {
    return (
        <div className="card" style={{padding: "8px"}}>
            <p>{title}</p>
            <Link to={`/post/${id}`}>
                <button className="btn light-blue darken-4" style={{marginRight: "8px"}}>Details</button>
            </Link>
            <Link to={`/edit/${id}`}>
                <button className="btn light-blue darken-4" style={{marginRight: "8px"}} >Edit</button>
            </Link>
            <button className="btn light-blue darken-4" style={{marginRight: "8px"}} >Delete</button>
        </div>
    )
}
