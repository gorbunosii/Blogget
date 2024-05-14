import React from 'react';
import style from './Author.module.css';
import {Text} from '../../../../../UI/Text';

export const Author = ({author, title}) => {
  return (<div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text As='a' fontweight='bolt' className={style.linkPost} href="#post">{author}</Text>
    </Text>
    <Text As='a' size={16} tsize={18} color='orange' className={style.linkAuthor} href='#author'>{title}</Text>
    <button className={style.delete} aria-label='удалить/скрыть пост'/>
  </div>);
};
