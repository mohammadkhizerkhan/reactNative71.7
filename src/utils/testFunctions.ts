export const sum = (a: number, b: number) => a + b;

export const addFieldToObject = (field, value, obj) => {
  obj[field] = value;
  return obj;
};

export const isEven = (a: number) => a % 2 === 0;
