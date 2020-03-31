import axios from 'axios';
import { API_HOST, API_PROTOCOL, API_KEY } from '../constants/index';

interface GetMovieListParams {
  s?: string;
  type?: string;
  callback?: (data) => void;
}

export const getMovieList = async (params: GetMovieListParams) => {
  // http://www.omdbapi.com/?apikey=b9bd48a6&s=Marvel&type=movie
  const { s, type, callback } = params;
  const res = await axios.get(
    `${API_PROTOCOL}${API_HOST}/?apikey=${API_KEY}&s=${s}&type=${type}`
  );
  console.log('res.data.Search', res.data.Search);
  if (callback) {
    callback(res.data.Search);
  }
};
