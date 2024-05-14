import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [exitAuth, setExitAuth] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const getOut = () => {
    setExitAuth(!exitAuth);
  };

  const logOut = () => {
    delToken();
    clearAuth();
    setExitAuth(false);
  };

  return (
    <div className={style.container}>
      {auth.name ? (
      <button onClick={getOut} className={style.btn}>
        <img className={style.img} src={auth.img} />
      </button>) : (
      <Text As='a' className={style.authlink} href={urlAuth}>
        <LoginIcon width={40} height={40}/>
      </Text>
      )}
      {exitAuth && (<button onClick={logOut}
        className={style.logout}>Выйти</button>)}
    </div>
  );
};

Auth.PropTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
