import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useNewsBest = () => {
  const [news, setNews] = useState(``);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (news) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((name) => {
        setNews(name);
      });
  });
  return [news];
};
