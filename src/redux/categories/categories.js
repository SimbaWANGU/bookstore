// Actions
const CHECK_STATUS = 'bookstore/category/CHECK_STATUS';

// Action Creators
export function checkStatus(text) {
  return {
    type: CHECK_STATUS,
    payload: text,
  };
}

// Reducer
const initialCategories = [];
export default function categoryReducer(allCategories = initialCategories, action) {
  switch (action.type) {
    case CHECK_STATUS: {
      return action.payload;
    }
    default: {
      return allCategories;
    }
  }
}
