import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import editeIcon from "../../images/edite.svg";
import deleteIcon from "../../images/delete.svg";
import * as api from "../../api/api";
import AddComments from "../../components/AddComment/AddComments";
import EditeComments from "../../components/EditeComment/EditeComment";
import CommentsList from "../../components/CommentsList/CommentsList";
function Post(props) {
  let { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isClickComment, setIsClickComment] = useState(false);
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [answComment, setAnswComment] = useState({});
  const post = props.data.find(
    (p) => p.id.toLocaleString() === id.toLocaleString()
  );
  useEffect(() => {
    api
      .getComments(id)
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Добавить комментарий
  const addComment = ({ text }) => {
    api
      .createComment(text, post.id)
      .then((comment) => {
        setComments([comment, ...comments]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // Удалить комментарий
  const onClickDeleteComment = (id) => {
    api
      .removeComment(id)
      .then(() => {
        const newComment = comments.filter((p) => p.id !== id);
        setComments(newComment);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleClickButtonComment = (item) => {
    setAnswComment(item);
    setIsClickEdit(false);
    setIsClickComment(true);
    
  };
  const handleClickEditeButtonComment = (item) => {
    setAnswComment(item);
    setIsClickComment(false);
    setIsClickEdit(true);
   
  };
  const addCommentAnswer = ({ text }) => {
    api
      .createComment(text, answComment.post_id, answComment.id)
      .then((comment) => {
        setComments([...comments, comment]);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const editComment = (text, id) => {
    api
      .editeComment(text, id)
      .then((data) => {
        const newsComment = comments.map((item) => {
          if (id === item.id) {
            item = { ...data };
          }
          return item;
        });
        setComments(newsComment);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Link className="link" to="/post">
        Вернуться на главную
      </Link>
      <div className="post">
        <p className="post__text">{post.text}</p>
        <div className="post__container">
          <p className="post__date"></p>
          {props.userId === post.user_id ? (
            <div className="post__buttons">
              <Link className="post-link" to={`/post/edit/${post.id}`}>
                <button className="post__button">
                  <img src={editeIcon} alt="иконка" />
                </button>
              </Link>
              <button
                onClick={() => {
                  props.onClickDelete(post.id);
                }}
                className="post__button"
              >
                <img src={deleteIcon} alt="иконка" />
              </button>
            </div>
          ) : null}
        </div>
        <CommentsList
          userId={props.userId}
          comments={comments}
          onClickEditeButton={handleClickEditeButtonComment}
          onClickDeleteComment={onClickDeleteComment}
          onClickButtonComment={handleClickButtonComment}
        />
        {isClickEdit ? (
          <EditeComments  answComment={answComment}
          editComment={editComment}/>
        ) : (
          <AddComments
            addComment={addComment}
            addCommentAnswer={addCommentAnswer}
            isClickComment={isClickComment}
          />
        )}
      </div>
    </div>
  );
}

export default Post;
