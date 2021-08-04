import React from "react";
import Comment from "../Comment/Comment";

const CommentList = (props) => {
  return (
    <div className="comments">
      {props.comments.map((item, index) => (
        <Comment onClickEditeButton={props.onClickEditeButton} key={index} item={item} userId={props.userId} onClickDeleteComment={props.onClickDeleteComment} onClickButtonComment={props.onClickButtonComment} />
      ))}
     
    </div>
  );
};
export default CommentList;
