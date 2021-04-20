// Actions (types)
export const INCREMENT = 'increaseCount';
export const DECREMENT = 'decreaseCount';
export const RESET = 'resetCount';

// Action methods
export const increase = () => ({
  type: INCREMENT,
});

export const decrease = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

// Initial store state
const initialState = {
  count: 9
}

// Reducer function
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};