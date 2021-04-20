import './App.css';
import PostsProvider from './context/posts/Provider'
import Routes from './routes'

function App() {
  return (
    <PostsProvider>
      <Routes />
    </PostsProvider>
  );
}

export default App;
