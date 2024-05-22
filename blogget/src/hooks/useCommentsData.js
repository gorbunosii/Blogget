import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [comment, setComments] = useState(``);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (comment) return;

    const foo = async () => {
      const response = await fetch(`${URL_API}/comments/${id}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      });
      const result = await response.json();
      return result;
    };
    foo().then((response) => {
      setComments(response);
    });
  });

  return [comment];
};
