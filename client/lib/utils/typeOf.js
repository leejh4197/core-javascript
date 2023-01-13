export const isNumbericString = (data) => {
  data = Number(data);
  return !isNaN(data);
};
