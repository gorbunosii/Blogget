import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
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
      .then(({name, icon_img: icomImg}) => {
        const img = icomImg.replace(/\?.*$/, '');
        setAuth({img, name});
      })
      .catch(err => {
        localStorage.clear();
        console.log(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
