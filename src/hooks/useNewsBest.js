import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';

export const useNewsBest = () => {
  const news = useSelector(state => state.post.news);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [news, loading];
};
