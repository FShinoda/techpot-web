import React from 'react';
import './style.css';

// Components
import CreateComment from "./Components/CreateComment";
import CommentBox from './Components/CommentBox';

const CommentSection = ({ comments }) => {
    return (
        <div className="comment-section-container">
            <div className="comment-section-comments">
                {comments?.map((comment) => (
                    <CommentBox username={comment.user_name} date={comment.comment_date} content={comment.comment_body} />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;