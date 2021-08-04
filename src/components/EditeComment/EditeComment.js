import React, { useState } from "react";
// import "./AddComments.css";

const EditeComments = ({
  answComment,
  editComment,
}) => {
  const [text, setText] = useState({
    text: "",
  });
  React.useEffect(() => {
    setText(answComment.text);
  }, [answComment]);
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    editComment({ text }, answComment.id);
    e.target.reset();
  }
  return (
    <div className="add-comments">
      <form className="add-comments__form" onSubmit={handleSubmit}>
        <textarea
          className="add-comments__text"
          name="text"
          type="text"
          rows="3"
          value={text || ""}
          onChange={handleChange}
          placeholder="Ответить на комментарий... "
        ></textarea>
        <button className="add-comments__button" type="submit">
          Редактировать
        </button>
      </form>
    </div>
  );
};
export default EditeComments;
