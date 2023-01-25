// fetch 사용

const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const joo = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };
  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  //   console.log(response);
  return response;
};

joo.get = async (url, options) => {
  return joo({
    url,
    ...options,
  });
};

joo.post = (url, body, options) => {
  return joo({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
joo.put = (url, body, options) => {
  return joo({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
joo.delete = (url, options) => {
  return joo({
    method: "DELETE",
    url,
    ...options,
  });
};
