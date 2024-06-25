import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

export const FormComment = props => {
  const value = useSelector(state => state.comment.comment);
  const dispath = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispath(updateComment(e.target.value));
  };

  return (
    <form onSubmit={handlerSubmit} className={style.container}>
      <label htmlFor="story">Оставить комментарий</label>
      <textarea value={value} onChange={handleChange} name="story"
        id="story" rows="5" cols="100"></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
