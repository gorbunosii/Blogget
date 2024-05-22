import React from 'react';
import {useCommentsData} from '../hooks/useCommentsData';
import PropTypes from 'prop-types';

export const commentsContext = React.createContext({});

export const CommentsContextProvider = ({children}) => {
  const [comment] = useCommentsData();
  return (
    <commentsContext.Provider value={{comment}}>
      {children}
    </commentsContext.Provider>
  );
};

commentsContext.PropTypes = {
  children: PropTypes.node.isRequired,
};
