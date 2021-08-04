import "./Main.css";
import editeIcon from "../../images/edite.svg";
import deleteIcon from "../../images/delete.svg";
import { Link, useRouteMatch } from "react-router-dom";

function Main(props) {
  const { path } = useRouteMatch();
  return (
    <div className="main">
      <div className="main__container">
        {props.inLogged ? (
          <button
            onClick={props.onSignOut}
            className="main__button"
            to="/login"
          >
            Выйти
          </button>
        ) : (
          <Link className="link" to="/login">
            Войти
          </Link>
        )}

        <Link className="link" to="/add-post">
          Добавить пост
        </Link>
      </div>
      {props.dataPost.map((item, index) => {
        return (
          <div className="post" key={index}>
            <Link className="post-link" to={`${path}/${item.id}`}>
              <p className="post__text">{item.text}</p>
            </Link>
            {props.userId === item.user_id ? (
              <div className="post__buttons">
                <Link className="post-link" to={`${path}/edit/${item.id}`}>
                  <button className="post__button">
                    <img src={editeIcon} alt="иконка" />
                  </button>
                </Link>
                <button
                  onClick={() => {
                    props.onClickDelete(item.id);
                  }}
                  className="post__button"
                >
                  <img src={deleteIcon} alt="иконка" />
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Main;
