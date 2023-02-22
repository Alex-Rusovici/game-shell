const initialState = {
  authenticated: true,
  user: {
    firstName: 'Alex',
    lastName: 'Rusovici',
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/logOut':
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
