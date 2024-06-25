import React from 'react';
import style from './Comments.module.css';
import List from './List';

export const Comments = ({comments}) => (
  <div>
    <p>Comments</p>
    <ul className={style.container}>
      {comments[0] ? (comments.map((item) =>
        <List key={item.data.id} props={item.data}></List>
      )) : <li>Нет комментариев</li>}
    </ul>
  </div>);
