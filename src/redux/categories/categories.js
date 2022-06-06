// Actions
const CHECK_STATUS = 'bookstore/category/CHECK_STATUS';

// Reducer
export default function categoryReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
