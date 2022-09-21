export const validateFormItems = (form: object) => {
  for (const [key, value] of Object.entries(form)) {
    if (`${key}` && `${value}` && `${value}` !== '') return true;
  }
  return false;
};
