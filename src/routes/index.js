import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from '../components/Nav'
import Home from '../views/Home'
import PostDetail from '../views/PostDetail'
import NewPost from '../views/NewPost'
import EditPost from '../views/EditPost'
import FourOFour from '../views/404'

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Nav />
                    <div className="container">
                        <Home />
                    </div>
                </Route>
                <Route path="/post/:id">
                    <Nav />
                    <div className="container">
                        <PostDetail />
                    </div>
                </Route>
                <Route path="/new">
                    <Nav />
                    <div className="container">
                        <NewPost />
                    </div>
                </Route>
                <Route path="/edit/:id">
                    <Nav />
                    <div className="container">
                        <EditPost />
                    </div>
                </Route>
                <Route>
                    <Nav />
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    )
}