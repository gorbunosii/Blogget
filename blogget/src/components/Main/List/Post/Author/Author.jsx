import style from './Author.module.css';
import {Text} from '../../../../../UI/Text';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
export const Author = ({author, title, id}) => {
  const {page} = useParams();

  return (<div className={style.content}>
    <Text As='h2' className={style.title}>
      <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
        <Text
          fontweight='bolt'
          className={style.linkPost}>{title}</Text>
      </Link>
    </Text>
    <Text As='a' size={16} tsize={18}
      color='orange' className={style.linkAuthor} href='#author'>{author}</Text>
    <button className={style.delete} aria-label='удалить/скрыть пост'/>
  </div>);
};

Author.PropTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
