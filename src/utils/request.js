export const toJSON = (request) => request.json();

export const handleErrors = (response) => {
  if (response.ok) {
    return response;
  }
  throw Error(`${response.status} error occured`);
};
