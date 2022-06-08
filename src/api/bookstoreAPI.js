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

const createBook = async (book) => {
  const values = JSON.stringify(book);
  await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: values,
  });
};

export { fetchBooks, createBook };
