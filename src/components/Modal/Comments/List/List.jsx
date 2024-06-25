import React from 'react';
import style from './List.module.css';
import {formatDate} from '../../../../utils/formatDate';

export const List = ({props}) => {
  const {author, body, created} = props;

  return (
    <li className={style.list}>
      <p className={style.body}>{body}</p>
      <p></p>
      <p className={style.author}>{author}</p>
      <time className={style.date} dateTime={created}>
        {formatDate(created)}</time>
    </li>
  );
};

