export const Login = () => {
  return {
    type: 'LOGIN',
  };
};

export const addIngredient = (data) => {
  return {
    type: 'ADD_INGREDIENT',
    payload:data
  };
};

export const getIngredients = () => {
  return {
    type: 'GET_INGREDIENTS',
  };
};




