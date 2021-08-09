export const Login = () => {
  return {
    type: 'LOGIN',
  };
};

export const addIngredient = data => {
  return {
    type: 'ADD_INGREDIENT',
    payload: data,
  };
};

export const addToGroceries = data => {
  return {
    type: 'ADD_TO_GROCERIES',
    payload: data,
  };
};

export const getIngredients = () => {
  return {
    type: 'GET_INGREDIENTS',
  };
};

export const getGroceries = () => {
  return {
    type: 'GET_GROCERIES',
  };
};


export const editIngredients = data => {
  return {
    type: 'EDIT_INGREDIENTS',
    payload: data,
  };
};
