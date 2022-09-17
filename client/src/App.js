import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentFeed from './components/comment/CommentFeed';
import Navbar from './components/navBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import ArticleViewer  from './components/articleViewer/ArticleViewer'

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        {/* <Route exact path='/' exact element={<Home />} /> */}
        <Route path='/articles' element={<ArticleViewer/>} />
        <Route path='/posts' element={<CommentFeed/>} />    
    </Routes>
    </Router>
  );
}

export default App;
