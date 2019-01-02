// import axios from "axios";
// import { CONFIG } from "../config";

// const API_URL = CONFIG.api;

export function Api(cancelToken) {
  return {
    get: path => {
      // let url = path ? `${API_URL}/${path}/` : `${API_URL}`;
      // return axios.get(url, { cancelToken }).then(res => res.data);

      // fake API response
      return Promise.resolve({'name': 'initial', 'value': 'data'});
    }
  };
}

export function SearchAPI(query) {
  // let url = `${API_URL}/search/${query}`;
  // return axios.get(url, { cancelToken }).then(res => res.data);

  // fake API responses
  // Note that the data of our faked API doesn't return objects with a
  // `label` member, hence we need to use `getOptionLabel` in the
  // <AsyncSelect /> component

  // TODO: simulate search results from the API by utilizing a
  // `filterOption` function
  return Promise.resolve([
    { 'name': 'foo', 'value': 'foo' },
    { 'name': 'bar', 'value': 'bar' },
    { 'name': 'baz', 'value': 'baz' }
  ]);
}
