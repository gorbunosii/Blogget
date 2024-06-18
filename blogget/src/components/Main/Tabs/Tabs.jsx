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
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: `Главня`, Icon: HomeIcon, link: 'rising'},
  {value: `Топ`, Icon: TopIcon, link: 'top'},
  {value: `Лучшие`, Icon: BestIcon, link: 'best'},
  {value: `Горячие`, Icon: HotIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [itemMenu, setItemMenu] = useState(`Главная`);
  const navigate = useNavigate();

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
          setisDropdownOpen(!isDropdownOpen)}>{itemMenu}
          <ArrowIcon width={15} height={15} /></button>
      </div>)}
      {(isDropdownOpen || !isDropdown) && (<ul className={style.list}
        onClick={() => setisDropdownOpen(false)}>
        {LIST.map(({value, link, id, Icon}) => (
          <Text
            As='li'
            className={style.item}
            key={id}
            onClick={() => {
              setItemMenu(value);
              navigate(`/category/${link}`);
            }}>
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
