import {useState} from 'react';
import style from './Author.module.css';
import {Text} from '../../../../../UI/Text';
import Modal from '../../../../Modal';
import PropTypes from 'prop-types';
export const Author = ({author, title, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (<div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text As='a' fontweight='bolt' onClick={() => {
        setIsModalOpen(true);
      }}
      className={style.linkPost} href="#post">{author}</Text>
    </Text>
    <Text As='a' size={16} tsize={18}
      color='orange' className={style.linkAuthor} href='#author'>{title}</Text>
    {isModalOpen && <Modal id={id}
      closeModal={() => {
        setIsModalOpen(false);
      }}/>}
    <button className={style.delete} aria-label='удалить/скрыть пост'/>
  </div>);
};

Author.PropTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
