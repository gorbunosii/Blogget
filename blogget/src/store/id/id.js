const initialState = {
  id: '',
};

export const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ID':
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};
