export const counterReducer = (state = 42, action) => {
  const { type, payload = 0 } = action;

  // type: increment | decrement
  if (type === 'increment') {
    return state + 1;
  }

  if (type === 'decrement') {
    return state - 1;
  }

  if (type === 'add') {
    return state + payload;
  }

  return state;
};
