const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u9ggSNjNIpL9vCl94FnJ/books';

const fetchBooks = async () => {
  const response = await fetch(baseURL);
  const results = await response.json();
  const resData = [];
  Object.keys(results).forEach((key) => {
    if (key) {
      resData.push({ ...results[key][0], item_id: key });
    }
  });
  return resData;
};

export { fetchBooks };
