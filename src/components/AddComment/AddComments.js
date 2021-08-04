import React, { useState } from "react";
import "./AddComments.css";

const AddComments = ({
  addComment,
  isClickComment,
  addCommentAnswer
}) => {
  const [values, setValues] = useState({
    text: "",
  });
  function handleChange({ target: { name, value } }) {
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    addComment(values);
    e.target.reset();
  }
  function handleSubmitAnswer(e) {
    e.preventDefault();
    addCommentAnswer(values);
    e.target.reset();
  }

  return (
    <div className="add-comments">
      {isClickComment ? (
        <form className="add-comments__form" onSubmit={handleSubmitAnswer}>
          <textarea
            className="add-comments__text"
            name="text"
            type="text"
            rows="3"
            value={values.text || ""}
            onChange={handleChange}
            placeholder="Ответить на комментарий... "
          ></textarea>
          <button className="add-comments__button" type="submit">
            Опубликовать
          </button>
        </form>
      ) : (
        <form className="add-comments__form" onSubmit={handleSubmit}>
          <textarea
            className="add-comments__text"
            name="text"
            type="text"
            rows="3"
            value={values.text || ""}
            onChange={handleChange}
            placeholder="Добавить комментарий... "
          ></textarea>
          <button className="add-comments__button" type="submit">
            Опубликовать
          </button>
        </form>
      )}
    </div>
  );
};
export default AddComments;
