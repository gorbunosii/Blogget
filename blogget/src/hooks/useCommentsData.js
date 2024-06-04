import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const [comment, setComments] = useState(``);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if (comment) return;

    const returnRequest = async () => {
      const response = await fetch(`${URL_API}/comments/${id}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      });
      const result = await response.json();
      return result;
    };
    returnRequest().then((response) => {
      setComments(response);
    });
  });

  return [comment];
};
