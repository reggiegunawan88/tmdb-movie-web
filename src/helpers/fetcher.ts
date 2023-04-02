/**
 * @param url -> request url string
 * @param method -> 'POST' or 'GET'
 */

interface IFetchConfig {
  url: string;
  method: string;
}

const fetcher = (fetchConfig: IFetchConfig) => {
  const { url, method } = fetchConfig;

  // token is obtained from TMDB account setting
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzExYWVjN2RkNGI1MmQ2NzYzNTRhZjc4MjMwMTVjOSIsInN1YiI6IjY0MjcwNjlhYTNlNGJhMDExMTQ5OTY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Po06XzDWVfnMCXntYmld_vOZccOAze5sqxPAv5_2_cg';

  // set req options
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(url, options)
    .then(resp => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp);
      }
      return resp.json();
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      // return error response
      return e?.json().then((resp: any) => {
        const errObj = {
          ...resp,
          code: e.status,
        };
        return Promise.reject(errObj);
      });
    });
};

export default fetcher;
