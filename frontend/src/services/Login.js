export const login = (username, password) => {
  const url = `http://localhost:5000/api/login?username=${username}&password=${password}`;
  return fetchUrl({ url });
};

export const getLoginUser = (username) => {
  const url = `http://localhost:5000/api/login${username}`;
  return fetchUrl({ url });
};

export const getUserById = (id) => {
  const url = `http://localhost:5000/api/user?id${id}`;
  return fetchUrl({ url });
};
const fetchUrl = ({ url, method, data }) => {
  return fetch(url, {
    method: method ? method : "GET",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};
