import React from 'react';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../utils/formatDate';
import Author from './Author';
import Rating from './Rating';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <Author author={author} title={title}></Author>
      <Rating ups={ups}></Rating>
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
