import AnswerComment from "../AnswerComment/AnsverComment";
const AnswerComments = ({ answerComments, userId, onClickDeleteComment, handleClickComment, handleClickEdite}) => {

  return (
    <div>
      {answerComments && answerComments.length !== 0  ? answerComments.map((item, index) => (
        <AnswerComment key={index} item={item}  onClickDeleteComment={onClickDeleteComment} userId={userId} handleClickComment={handleClickComment} handleClickEdite={handleClickEdite}/>
      )) : false}
    </div>
  );
};
export default AnswerComments;
