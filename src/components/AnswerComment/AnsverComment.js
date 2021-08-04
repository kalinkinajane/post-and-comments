import AnswerComments from "../AnswerComments/AnswerComments"
import editeIcon from "../../images/edite.svg";
import deleteIcon from "../../images/delete.svg";
const AnswerComment = ({ item, userId, onClickDeleteComment, handleClickComment, handleClickEdite }) => {
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
        <AnswerComments answerComments={item.replies} onClickDeleteComment={onClickDeleteComment} handleClickComment={handleClickComment} handleClickEdite={handleClickEdite}/>
      </div>
    );
  };
  export default AnswerComment;