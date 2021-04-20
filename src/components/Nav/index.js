import { Link } from 'react-router-dom'

export default function Nav() {
    return (
            <nav className="light-blue darken-4">
                <div className="container">
                    <Link to={"/"}><button className="btn light-blue darken-4" style={{marginRight: "8px"}}>Home</button></Link>
                    <Link to={"/new"}><button className="btn light-blue darken-4" style={{marginRight: "8px"}}>New post</button></Link>
                </div>
            </nav>
    )
}