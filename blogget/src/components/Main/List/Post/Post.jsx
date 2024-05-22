import React from 'react';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../utils/formatDate';
import Author from './Author';
import Rating from './Rating';


export const Post = ({props}) => {
  const {author, created, selftext, title, ups, subreddit, id} = props;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />
      <Author author={author} title={title}
        subreddit={subreddit} id={id}></Author>
      <Rating ups={ups}></Rating>
      <time className={style.date} dateTime={created}>{formatDate(created)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
