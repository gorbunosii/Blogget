import {useNewsBest} from '../../../hooks/useNewsBest';
import style from './List.module.css';
import Post from './Post';
import {AuthLoader} from '../../../UI/Preloader/AuthLoader';

export const List = props => {
  const [news, loading] = useNewsBest();

  return (
    <ul className={style.list}>
      {loading ? (<AuthLoader size={1360}/>) : news[0] && (news.map((item) =>
        <Post key={item.data.id} props={item.data}></Post>))}
    </ul>
  );
};
