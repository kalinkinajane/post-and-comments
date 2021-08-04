import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Comment.css";
import editeIcon from "../../images/edite.svg";
import deleteIcon from "../../images/delete.svg";
import * as api from "../../api/api";
import AnswerComments from "../AnswerComments/AnswerComments";

const Comment = ({
  item,
  userId,
  onClickEditeButton,
  onClickDeleteComment,
  onClickButtonComment,
}) => {
  const [answerComments, setAanswerComments] = useState([]);

  useEffect(() => {
    api
      .getCommentAnswer(item.id)
      .then((data) => {
        setAanswerComments(data.replies);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickComment = () => {
    onClickButtonComment(item);
  };
  const handleClickEdite = () => {
    onClickEditeButton(item);
  };
  return (
    <div className="comment">
      <p className="comment__text">{item.text}</p>
      <div className="comment__container">
        {userId === item.user_id ? (
          <div className="comment__buttons">
            <button className="post__button" onClick={handleClickEdite}>
              <img src={editeIcon} alt="иконка" />
            </button>

            <button
              className="post__button"
              onClick={() => {
                onClickDeleteComment(item.id);
              }}
            >
              <img src={deleteIcon} alt="иконка" />
            </button>
          </div>
        ) : null}
        <button className="comment__answer" onClick={handleClickComment}>
          Ответить
        </button>
      </div>
      <AnswerComments
      handleClickEdite={handleClickEdite}
        answerComments={answerComments}
        onClickDeleteComment={onClickDeleteComment}
        userId={userId}
        handleClickComment={handleClickComment}
      />
    </div>
  );
};
export default Comment;
