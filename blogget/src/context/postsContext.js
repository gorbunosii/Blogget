import React from 'react';
import {useNewsBest} from '../hooks/useNewsBest';
import PropTypes from 'prop-types';

export const newsBest = React.createContext({});

export const NewsBestContextProvider = ({children}) => {
  const [news] = useNewsBest();
  return (
    <newsBest.Provider value={{news}}>
      {children}
    </newsBest.Provider>
  );
};

newsBest.PropTypes = {
  children: PropTypes.node.isRequired,
};

