import {useEffect, useRef, useState} from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import * as ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import {useDispatch} from 'react-redux';
import {AuthLoader} from '../../UI/Preloader/AuthLoader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const buttonRef = useRef(null);
  const [commentary, loading] = useCommentsData();
  const [comments, setComments] = useState(``);
  const dispatch = useDispatch();

  dispatch({
    type: 'UPDATE_ID',
    id,
  });

  useEffect(() => {
    if (commentary[0]) {
      setComments(commentary[1].data.children);
    }
  }, [commentary]);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || target === buttonRef.current ||
      e.key === 'Escape') {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      {loading === 'loading' && (<AuthLoader size={1440}/>)}
      {loading === 'error' && 'ERROR'}
      {loading === 'loaded' && commentary[0] && (
        <div className={style.modal}>
          <h2 className={style.title}>
            {commentary[0].data.children[0].data.title}</h2>
          <div className={style.content}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  }
                }
              }
            }}>
              {commentary[0].data.children[0].data.selftext}
            </Markdown></div>
          <p className={style.author}>
            {commentary[0].data.children[0].data.author}</p>
          <FormComment />
          <Comments comments={comments} />
          <button className={style.close} onClick={() => {
            navigate(`/category/${page}`);
          }}>
            <CloseIcon ref={buttonRef} />
          </button>
        </div>
      )}
    </div>,
    document.getElementById('modal-root'));
};

Modal.PropTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  selftext: PropTypes.string,
};
