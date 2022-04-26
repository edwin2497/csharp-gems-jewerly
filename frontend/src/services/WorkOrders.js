export const getAllWorkOrders = () => {
  const url = "http://localhost:5000/api/workorders";
  return fetchUrl({ url });
};

export const getWorkOrderById = (id) => {
  const url = `http://localhost:5000/api/workorders/${id}`;
  return fetchUrl({ url });
};

export const deleteWorkOrderById = (id) => {
  const url = `http://localhost:5000/api/workorders/${id}`;
  const method = "DELETE";
  return fetchUrl({ url, method });
};

export const addWorkOrder = (workorder) => {
  const url = "http://localhost:5000/api/workorders";
  const method = "POST";
  return fetchUrl({ url, method, data: workorder });
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
