import React, {useRef} from 'react';
import style from './FormComment.module.css';

export const FormComment = props => {
  const textButton = useRef(null);
  const handlerSubmit = e => {
    e.preventDefault();
    console.log(textButton.current.value);
  };
  return (
    <form onSubmit={handlerSubmit} className={style.container}>
      <label htmlFor="story">Оставить комментарий</label>
      <textarea ref={textButton} name="story" id="story" rows="5" cols="100"></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
