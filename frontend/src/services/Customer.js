export const getAllCustomers = () => {
  const url = "http://localhost:5000/api/customer";
  return fetchUrl({ url });
};

export const getCustomerById = (id) => {
  const url = `http://localhost:5000/api/customer${id}`;
  return fetchUrl({ url });
};

export const deleteCustomerById = (id) => {
  const url = `http://localhost:5000/api/customer${id}`;
  const method = "DELETE";
  return fetchUrl({ url, method });
};

export const addCustomer = (customer) => {
  const url = "http://localhost:5000/api/customer";
  const method = "POST";
  return fetchUrl({ url, method, data: customer });
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
