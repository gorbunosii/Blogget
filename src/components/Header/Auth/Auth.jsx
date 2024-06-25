import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {AuthLoader} from '../../../UI/Preloader/AuthLoader';

export const Auth = () => {
  const dispath = useDispatch();
  const [exitAuth, setExitAuth] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const getOut = () => {
    setExitAuth(!exitAuth);
  };

  const logOut = () => {
    dispath(deleteToken());
    clearAuth();
    setExitAuth(false);
  };

  return (
    <div className={style.container}>
      {loading ? (<AuthLoader size={30}/>) : auth.name ? (
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
