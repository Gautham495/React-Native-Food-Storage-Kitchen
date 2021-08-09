const initialState = {
  ingredients: [],
  groceries: [],
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {...state, ingredients: [...state.ingredients, action.payload]};
    case 'ADD_TO_GROCERIES':
      return {...state, groceries: [...state.groceries, action.payload]};
    case 'GET_INGREDIENTS':
      return {...state};
      case 'GET_GROCERIES':
      return {...state};
    case 'EDIT_INGREDIENTS':
      return {
        ...state,
        ingredients: state.ingredients.map(ingredient =>
          ingredient.id === action.payload.id ? action.payload : ingredient,
        ),
      };

    default:
      return {...state};
  }
};
