// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import {ApiEndPoints} from '../globals';

const baseUrl = ApiEndPoints.baseUrlEndpoint.baseUrl;

const charactersRequest = (baseURL = baseUrl) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    timeout: 1000000,
  });
  const getAllCharacters = async id => {
    return await api.get(`${ApiEndPoints.apiEndPoints.people}${id}`);
  };
  return {
    getAllCharacters,
  };
};

// let's return back our create method as the default.
export default {
  charactersRequest,
};
