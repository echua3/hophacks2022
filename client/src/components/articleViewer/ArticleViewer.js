import './ArticleViewer.css';

let articleURL = "https://getbootstrap.com/docs/3.4/css/" // test for now

function ArticleViewer() {
  return (
    <div id="parent">
        <iframe src="{ articleURL }"></iframe>
    </div>
  );
}

export default ArticleViewer;
