import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentFeed from './components/comment/CommentFeed';
import Navbar from './components/navBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import ArticleViewer  from './components/articleViewer/ArticleViewer';
import ArticleSelect from './components/articleSelect/ArticleSelect';

// /************************
//  ****** FIREBASE ********
//  ************************/
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCKAN-t_Iju-z5VUnrIe8uxUe6K1mtJg40",
//   authDomain: "hophacksfall22.firebaseapp.com",
//   projectId: "hophacksfall22",
//   storageBucket: "hophacksfall22.appspot.com",
//   messagingSenderId: "63315149894",
//   appId: "1:63315149894:web:6a9417347182bfbf42f647",
//   measurementId: "G-BKN52TTLGJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // *************************
// // END FIREBASE
// // *************************

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        {/* <Route exact path='/' exact element={<Home />} /> */}
        <Route path='/' element={<ArticleSelect/>} />
        <Route path='/posts' element={<CommentFeed/>} />  
        <Route path='/view' element={<ArticleViewer/>} />  
       
    </Routes>
    </Router>
  );
}

export default App;
