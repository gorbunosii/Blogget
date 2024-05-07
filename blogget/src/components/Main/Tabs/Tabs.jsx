import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

import {ReactComponent as ArrowIcon} from './icons/arrow.svg';
import {ReactComponent as HomeIcon} from './icons/home.svg';
import {ReactComponent as TopIcon} from './icons/top.svg';
import {ReactComponent as BestIcon} from './icons/best.svg';
import {ReactComponent as HotIcon} from './icons/hot.svg';

const LIST = [
  {value: `Главня`, Icon: HomeIcon},
  {value: `Топ`, Icon: TopIcon},
  {value: `Лучшие`, Icon: BestIcon},
  {value: `Горячие`, Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (<div className={style.wrapperBtn}>
        <button className={style.btn} onClick={() =>
          setisDropdownOpen(!isDropdownOpen)}>PUSH
          <ArrowIcon width={15} height={15} /></button>
      </div>)}
      {(isDropdownOpen || !isDropdown) && (<ul className={style.list}
        onClick={() => setisDropdownOpen(false)}>
        {LIST.map(({value, id, Icon}) => (
          <Text As='li' className={style.item} key={id}>
            <Text As='button' tsize={18} color='blue' className={style.btn}>
              {value}
              {Icon && <Icon width={30} height={30}/>}
            </Text>
          </Text>))}
      </ul>)}
    </div>);
};

Tabs.PropTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
