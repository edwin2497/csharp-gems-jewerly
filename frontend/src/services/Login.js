export const login = (username, password) => {
  const url = `http://localhost:5000/api/login?username=${username}&password=${password}`;
  return fetchUrl({ url });
};

export const getLoginUser = (username) => {
  // return {
  //   Email: "edwin1224leon@gmail.com",
  //   FirstName: "Edwin",
  //   HiringDate: "2022-12-24T00:00:00",
  //   IdCard: 402370500,
  //   IdDirection: 1,
  //   IdEmployee: 1,
  //   IdPermission: 1,
  //   IdPosition: 1,
  //   LastName1: "Leon",
  //   LastName2: "Herrera",
  //   Password: "123",
  //   Phone: "89753995",
  //   Salary: 1000000,
  // };
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
