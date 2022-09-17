import './ArticleViewer.css';
import ArticleSidebar from './ArticleSidebar';


function ArticleViewer() {
    return (
        <div className="ArticleViewer">
            <iframe title="Article" src={ window.location.href.split('url=')[1] }></iframe>
            <ArticleSidebar/>
        </div>
    );
}

export default ArticleViewer;
