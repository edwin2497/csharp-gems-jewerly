export const getAllInvoices = () => {
  const url = "http://localhost:5000/api/invoices";
  return fetchUrl({ url });
};

export const getInvoicesById = (id) => {
  const url = `http://localhost:5000/api/invoices/${id}`;
  return fetchUrl({ url });
};

export const deleteInvoicesById = (id) => {
  const url = `http://localhost:5000/api/invoices/${id}`;
  const method = "DELETE";
  return fetchUrl({ url, method });
};

export const addInvoices = (invoices) => {
  const url = "http://localhost:5000/api/invoices";
  const method = "POST";
  return fetchUrl({ url, method, data: invoices });
};

export const updateInvoices = (invoices) => {
  const url = "http://localhost:5000/api/invoices";
  const method = "PUT";
  return fetchUrl({ url, method, data: invoices });
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
