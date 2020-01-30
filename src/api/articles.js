import { serverUrl } from '../config';
import { toJSON } from '../utils/request';

export const fetchSportArticles = () => fetch(`${serverUrl}/articles/sports`).then(toJSON);
export const fetchFashionArticles = () => fetch(`${serverUrl}/articles/fashion`).then(toJSON);
