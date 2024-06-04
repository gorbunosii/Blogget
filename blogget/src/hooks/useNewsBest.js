import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useNewsBest = () => {
  const [news, setNews] = useState(``);
  const token = useSelector(state => state.token.token);

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
