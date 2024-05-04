import React from 'react';
import style from './Author.module.css';

export const Author = ({author, title}) => {
  return (<div className={style.content}>
    <h2 className={style.title}>
      <a className={style.linkPost} href="#post">{title}</a>
    </h2>
    <a className={style.linkAuthor} href='#author'>{author}</a>
    <button className={style.delete} aria-label='удалить/скрыть пост'/>
  </div>);
};
