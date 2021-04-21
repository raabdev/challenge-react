import { Link } from 'react-router-dom'

export default function FourOFour() {
    return (
        <div className="container">
            <p>Sorry, I didn't find what you were looking for</p>
            <Link to={"/"}>
                <button className="btn light-blue darken-4">Go home</button>
            </Link>
        </div>
    )
}
