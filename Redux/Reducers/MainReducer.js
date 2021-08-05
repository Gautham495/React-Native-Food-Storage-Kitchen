const initialState = {
  ingredients: [],
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {...state, ingredients: [...state.ingredients, action.payload]};
    case 'GET_INGREDIENTS':
      return {...state};
    default:
      return {...state};
  }
};
