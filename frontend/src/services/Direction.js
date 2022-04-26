export const getAllDirections = () => {
  //const url = process.env.REACT_APP_API_URL + "direction";
  const url = "http://localhost:5000/api/direction";
  return fetchUrl({ url });
};

export const getDirectionById = (id) => {
  //const url = process.env.REACT_APP_API_URL + `direction/${id}`;
  const url = `http://localhost:5000/api/direction/${id}`;
  return fetchUrl({ url });
};

export const deleteDirectionById = (id) => {
  //const url = `api/direction/${id}`;
  const url = `http://localhost:5000/api/direction/${id}`;
  const method = "DELETE";
  return fetchUrl({ url, method });
};

export const insertDirection = (direction) => {
  //const url = "api/direction";
  const url = "http://localhost:5000/api/direction";
  const method = "POST";
  return fetchUrl({ url, method, data: direction });
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
    .then((data) => data);
};
