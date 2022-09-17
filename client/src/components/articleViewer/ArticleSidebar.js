import './ArticleSidebar.css';

function postComment(){
    let commentArea = document.getElementById("commentArea");

    let content = "I'm null!";
    if (commentArea) {
        content = commentArea.value;
    }
    
    alert("Your post has been processed!");
    console.log(content);
}

function ArticleSidebar() {
  return (
    <div className="ArticleSidebar">
        <textarea id="commentArea" placeholder="Share your thoughts..."></textarea>
        <button className="postButton" name="postButton" onClick={ postComment }>Post!</button>
    </div>
  );
}

export default ArticleSidebar;
