import './ArticleSidebar.css';

function postComment(){
    let content = getElementById("commentArea").value;
    
    console.log(content);
}

function ArticleSidebar() {
  return (
    <div className="ArticleSidebar">
        <textarea id="commentArea" placeholder="Share your thoughts..."></textarea>
        <input className="postButton" type="button" onclick="postComment()">Post</input>
    </div>
  );
}

export default ArticleSidebar;
