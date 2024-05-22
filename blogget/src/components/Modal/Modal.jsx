import {useEffect, useRef, useState} from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import * as ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const buttonRef = useRef(null);
  const article = useCommentsData(id);
  const [comments, setComments] = useState(``);

  useEffect(() => {
    if (article[0]) {
      setComments(article[0][1].data.children);
    }
  }, [article]);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || target === buttonRef.current ||
      e.key === 'Escape') {
      closeModal();
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
      {article[0] && (
        <div className={style.modal}>
          <h2 className={style.title}>
            {article[0][0].data.children[0].data.title}</h2>
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
              {article[0][0].data.children[0].data.selftext}
            </Markdown></div>
          <p className={style.author}>
            {article[0][0].data.children[0].data.author}</p>
          <FormComment />
          <Comments comments={comments} />
          <button className={style.close}>
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
