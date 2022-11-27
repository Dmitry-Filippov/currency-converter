const BASE_URL = `https://min-api.cryptocompare.com/data/`;

function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  } else {
    return res.json();
  }
}

export function getCourse(first, second) {
  return fetch(`${BASE_URL}price?fsym=${first}&tsyms=${second}`, {
    method: "GET",
  }).then((res) => {
    return _getResponseData(res);
  });
}

// export function getAllCourses() {
//   return fetch(`${BASE_URL}pricemulti?fsyms=USD,EUR&tsyms=RUB`, {
//     method: "GET",
//   }).then((res) => {
//     return _getResponseData(res);
//   });
// }

export function getAllCourses() {
  return Promise.all([
    fetch(`${BASE_URL}pricemulti?fsyms=USD,EUR&tsyms=RUB`, {
      method: "GET",
    }).then((res) => {
      return _getResponseData(res);
    }),
    fetch(`${BASE_URL}pricemulti?fsyms=USD,RUB&tsyms=EUR`, {
      method: "GET",
    }).then((res) => {
      return _getResponseData(res);
    }),
    fetch(`${BASE_URL}pricemulti?fsyms=EUR,RUB&tsyms=USD`, {
      method: "GET",
    }).then((res) => {
      return _getResponseData(res);
    }),
  ]).then((res) => {
    return res;
  });
}
