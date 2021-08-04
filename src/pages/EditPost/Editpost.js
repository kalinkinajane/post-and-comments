import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPost = (props) => {
  let { id } = useParams();
  const post = props.data.find(
    (p) => p.id.toLocaleString() === id.toLocaleString()
  );
  const [text, setText] = useState({
    text: "",
  });
  React.useEffect(() => {
    setText(post.text);
  }, [post]);

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdatePost({ text }, id);
  }
  return (
    <div className="add-post">
      <Link className="link" to="/post">
        Вернуться на главную
      </Link>
      <h1 className="title-form">Редактировать пост</h1>
      <form className="add-post__form" onSubmit={handleSubmit}>
        <textarea
          className="add-post__text"
          name="text"
          type="text"
          value={text || ""}
          onChange={handleChange}
        ></textarea>
        <button className="form__button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
export default EditPost;
