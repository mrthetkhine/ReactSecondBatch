import React from "react";
import '../post.css'

function PostHeader({title}) {
    return <div className="title">
        {title}

    </div>;
}

function PostBody(props) {
    return <div className="body">
        {props.body}
    </div>;
}

function PostComment(props) {

    function commentClicked(id){
        console.log("Comment clicked ",id);
    }
    return <div className="comment" onClick={()=>commentClicked(props.comment.id)}>
        {props.comment.text}
    </div>;
}

function Post(props){
    console.log("Props ",props.post);
    const {title,body} = props.post;
    const comments = props.comments;
    console.log("Title ",title, "Body ",body, "Comment ",comments);
    return (<div className="post">
                <PostHeader title={title}/>
                <PostBody body={body}/>
                {
                    comments.map(comment=>
                        <PostComment
                            key={comment.id}
                            comment={comment}/>)
                }
                {/*<PostComment comment={comments[0]}/>
                <div className="comment">
                    This is comment 2
                </div>*/}
            </div>
    );
}
export default Post;