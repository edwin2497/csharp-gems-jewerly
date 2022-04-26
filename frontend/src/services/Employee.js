export const getAllEmployees = () => {
  //const url = process.env.REACT_APP_API_URL + "employee";
  const url = "http://localhost:5000/api/employee";
  return fetchUrl({ url });
};

export const getEmployeeById = (id) => {
  //const url = process.env.REACT_APP_API_URL + `employee/${id}`;
  const url = `http://localhost:5000/api/employee/${id}`;
  return fetchUrl({ url });
};

export const deleteEmployeeById = (id) => {
  //const url = `api/employee/${id}`;
  const url = `http://localhost:5000/api/employee/${id}`;
  const method = "DELETE";
  return fetchUrl({ url, method });
};

export const addEmployee = (employee) => {
  //const url = "api/employee";
  const url = "http://localhost:5000/api/employee";
  const method = "POST";
  return fetchUrl({ url, method, data: employee });
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
