// Actions
const CHECK_STATUS = 'bookstore/category/CHECK_STATUS';

// Action Creators
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}

// Reducer
const initialCategories = [];
export default function categoryReducer(allCategories = initialCategories, action) {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }
    default: {
      return allCategories;
    }
  }
}
