import "regenerator-runtime/runtime";

//ajax function

async function fetchGetData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  return data;
}

async function fetchPostData(url, options) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  let data = await response.json();
  return data;
}

const api = {
  fetchGetData: fetchGetData,
  fetchPostData: fetchPostData,
};

export default api;
