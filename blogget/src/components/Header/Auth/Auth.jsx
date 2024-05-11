import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {URL_API} from '../../../api/const';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [exitAuth, setExitAuth] = useState(false);

  useEffect(() => {
    if (!token) return;

    useAuth(URL_API, token)
      .then(response => response.json())
      .then(({name, icon_img: icomImg}) => {
        const img = icomImg.replace(/\?.*$/, '');
        setAuth({img, name});
      })
      .catch(err => {
        localStorage.clear();
        console.log(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
      <button onClick={() => setExitAuth(!exitAuth)} className={style.btn}>
        <img className={style.img} src={auth.img} />
      </button>) : (
      <Text As='a' className={style.authlink} href={urlAuth}>
        <LoginIcon width={40} height={40}/>
      </Text>
      )}
      {exitAuth && (<button onClick={() => {
        delToken(); setAuth({}); setExitAuth(false);
      }}
      className={style.logout}>Выйти</button>)}
    </div>
  );
};

Auth.PropTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
