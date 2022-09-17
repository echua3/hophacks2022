import './ArticleViewer.css';

function ArticleViewer() {
  return (
    <div className="ArticleViewer">
        <iframe src="{ this.props.url }"></iframe>
    </div>
  );
}

export default ArticleViewer;
