import { API_ID } from './config';

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_ID}`,
  },
};

const BASE_API_URL = 'https://api.spotify.com';

export const getData = (path: string, params?: Record<string, string>) => {
  const searchParams = new URLSearchParams(params);
  const url = new URL(path, BASE_API_URL);

  return fetch(`${url.toString()}?${searchParams.toString()}`, options).then(
    (res) => res.json()
  );
};
