import {useContext} from 'react';
import style from './List.module.css';
import {newsBest} from '../../../context/postsContext';
import Post from './Post';

export const List = props => {
  const {news} = useContext(newsBest);

  return (
    <ul className={style.list}>
      {news.data && (news.data.children.map((item) =>
        <Post key={item.data.id} props={item.data}></Post>))}
    </ul>
  );
};
