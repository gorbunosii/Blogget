import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentaryRequestAsync} from '../store/commentary/commentaryAction';

export const useCommentsData = () => {
  const commentary = useSelector(state => state.commentary.comment);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.commentary.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentaryRequestAsync());
  }, [token]);

  return [commentary, loading];
};
