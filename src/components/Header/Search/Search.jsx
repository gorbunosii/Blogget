import React, {useState} from 'react';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {useDispatch} from 'react-redux';
import {searchRequest} from '../../../store/search/searchAction';

export const Search = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest(search));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        className={style.search}
        type="search" />
      <button className={style.button} type='submit'>
        <SearchIcon width={30} height={30} />
      </button>
    </form>
  );
};
