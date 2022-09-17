import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentFeed from './components/comment/CommentFeed';
import Navbar from './components/navBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import ArticleViewer  from './components/articleViewer/ArticleViewer';
import ArticleSelect from './components/articleSelect/ArticleSelect';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        {/* <Route exact path='/' exact element={<Home />} /> */}
        <Route path='/articles' element={<ArticleSelect/>} />
        <Route path='/posts' element={<CommentFeed/>} />  
        <Route path='/view' element={<ArticleViewer/>} />  
    </Routes>
    </Router>
  );
}

export default App;
