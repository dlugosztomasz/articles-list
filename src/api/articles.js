import { serverUrl } from 'config';
import { toJSON, handleErrors } from 'utils/request';

export const fetchSportArticles = () =>
  fetch(`${serverUrl}/articles/sports`)
    .then(handleErrors)
    .then(toJSON)
    .catch((error) => {
      console.log(error);
    });

export const fetchFashionArticles = () =>
  fetch(`${serverUrl}/articles/fashion`)
    .then(handleErrors)
    .then(toJSON)
    .catch((error) => {
      console.log(error);
    });
