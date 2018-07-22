// import axios from "axios";
import { CONFIG } from "../config";

const API_URL = CONFIG.api;

export function Api(cancelToken) {
  return {
    get: path => {
      //let url = path ? `${API_URL}/${path}/` : `${API_URL}`;
      // return axios.get(url, { cancelToken }).then(res => res.data);

      // fake API response
      return Promise.resolve({'initial': 'data'});
    }
  };
}

export function SearchAPI(query) {
  // let url = `${API_URL}/search/${query}`;
  // return axios.get(url).then(res => res.data);

  // fake API responses
  return Promise.resolve([
    { 'name': 'foo', 'value': 'foo' },
    { 'name': 'bar', 'value': 'bar' },
    { 'name': 'baz', 'value': 'baz' }
  ]);

}
