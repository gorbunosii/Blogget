import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/post/postAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const news = useSelector(state => state.post.news);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '250px',
    });
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
  return (
    <>
      <ul className={style.list}>
        {news[0] && (news.map((item) => (
          <Post key={item.data.id} props={item.data}></Post>)))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet/>
    </>
  );
};
