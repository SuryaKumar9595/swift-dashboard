export const persistState = (state) => {
  localStorage.setItem('swift_state', JSON.stringify(state));
};

export const getPersistedState = () => {
  const stored = localStorage.getItem('swift_state');
  return stored ? JSON.parse(stored) : null;
};
