import React from 'react';
import style from './Rating.module.css';
import {Text} from '../../../../../UI/Text';

export const Rating = ({ups}) => {
  return (
    <div className={style.rating}>
      <Text As='button' className={style.up} aria-label='Увеличивает рейтинг'/>
      <Text As='p' tsize={18} fontweight='bolt' color='grey99' className={style.ups}>{ups}</Text>
      <Text As='button' className={style.down} aria-label='Уменьшает рейтинг'/>
    </div>
  );
};
