import apisauce from 'apisauce';
import {ApiEndPoints} from '../globals';
const axios = require('axios').default;

const baseUrl = ApiEndPoints.baseUrlEndpoint.baseUrl;
const api = apisauce.create({
  // base URL is read from the "constructor"
  baseUrl,
  // here are some default headers
  headers: {
    'Cache-Control': 'no-cache',
  },
  // 10 second timeout...
  timeout: 1000000,
});

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const GET_Filter_CHARACTERS = 'GET_Filter_CHARACTERS';
export const GET_SPECIES = 'GET_SPECIES';
export const GET_FILM = 'GET_FILM';
export const GET_STARSHIPS = 'GET_STARSHIPS';
export const CLEAR_DATA = 'CLEAR_DATA';

export const getCharacters = () => {
  try {
    return async dispatch => {
      dispatch({
        type: FETCH_CHARACTERS,
      });
      const res = await axios.get(
        `${ApiEndPoints.baseUrlEndpoint.baseUrl}${ApiEndPoints.apiEndPoints.people}`,
      );
      if (res.data) {
        console.log('getCharacters API response ');
        dispatch({
          type: GET_CHARACTERS,
          payload: res.data,
          fetching: false,
        });
      } else {
        console.log('Unable to fetch characters data ');
      }
    };
  } catch (error) {
    console.log('error ' + error);
  }
};

export const getFilterCharacters = filterText => {
  try {
    return async dispatch => {
      dispatch({
        type: FETCH_CHARACTERS,
      });
      const res = await axios.get(
        `${ApiEndPoints.baseUrlEndpoint.baseUrl}${ApiEndPoints.apiEndPoints.people}?search=${filterText}`,
      );
      if (res.data) {
        console.log('getFilterCharacters Search API response ');
        dispatch({
          type: GET_Filter_CHARACTERS,
          payload: res.data,
          fetching: false,
        });
      } else {
        console.log('Unable to fetch filter character');
      }
    };
  } catch (error) {
    console.log('error ' + error);
  }
};

export const getSpacies = url => {
  try {
    return async dispatch => {
      dispatch({
        type: FETCH_CHARACTERS,
      });
      const res = await axios.get(`${url}`);
      if (res.data) {
        console.log('getSpacies API response ');
        dispatch({
          type: GET_SPECIES,
          payload: res.data,
          fetching: false,
        });
      } else {
      }
    };
  } catch (error) {
    console.log('error ' + error);
  }
};

export const getFilm = url => {
  try {
    return async dispatch => {
      dispatch({
        type: FETCH_CHARACTERS,
      });
      console.log('get film url ' + url);
      const res = await axios.get(`${url}`);
      if (res.data) {
        console.log('getFilm API response ');
        dispatch({
          type: GET_FILM,
          payload: res.data,
          fetching: false,
        });
      } else {
        console.log('Unable to fetch film data');
      }
    };
  } catch (error) {
    console.log('error ' + error);
  }
};

export const getStarships = url => {
  try {
    return async dispatch => {
      dispatch({
        type: FETCH_CHARACTERS,
      });
      const res = await axios.get(`${url}`);
      if (res.data) {
        dispatch({
          type: GET_STARSHIPS,
          payload: res.data,
          fetching: false,
        });
      } else {
        console.log('Unable to fetch starship data');
      }
    };
  } catch (error) {
    console.log('error ' + error);
  }
};

export const clearData = url => {
  try {
    return async dispatch => {
      dispatch({
        type: CLEAR_DATA,
      });
    };
  } catch (error) {
    console.log('error ' + error);
  }
};