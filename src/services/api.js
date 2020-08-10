const axios = require('axios');
const LOGGER = require('../utils/logger');

const validateStatus = (status) => {
  return status === 200 || status === 400 || status === 401 || status === 500;
};

const HEADERS = {
  'Authorization': localStorage.getItem('TOKEN_KEY'),
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'x-auth-token': localStorage.getItem('TOKEN_KEY'),
};

const HEADERS_MULTIPLE_PART = {
  ...HEADERS,
  'Content-Type': 'multipart/form-data; boundary=something',
  'Accept': 'application/json',
};

const api = {
  post: (endpoint, params) => {
    LOGGER.log('******Post=', JSON.parse(JSON.stringify(endpoint)));
    LOGGER.log('******Params=', JSON.parse(JSON.stringify(params)));
    LOGGER.log('******HEADERS=', JSON.parse(JSON.stringify(HEADERS)));
    return axios.default
        .post(endpoint, params, {
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        })
        .then(
            (response) => {
              LOGGER.log('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        )
        .catch(
            (response) => {
              LOGGER.error('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        );
  },

  postMultiplePart: (endpoint, params) => {
    LOGGER.log('******postMultiplePart=', JSON.parse(JSON.stringify(endpoint)));
    LOGGER.log('******Params=', JSON.parse(JSON.stringify(params)));
    LOGGER.log('******HEADERS=', JSON.parse(JSON.stringify(HEADERS)));
    return axios.default
        .post(endpoint, params, {
          headers: HEADERS_MULTIPLE_PART,
          validateStatus: (status) => validateStatus(status),
        })
        .then(
            (response) => {
              LOGGER.log('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        )
        .catch(
            (response) => {
              LOGGER.error('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        );
  },

  get: (endpoint, params = {}) => {
    LOGGER.log('******Get=', JSON.parse(JSON.stringify(endpoint)));
    LOGGER.log('******Params=', JSON.parse(JSON.stringify(params)));
    LOGGER.log('******HEADERS=', JSON.parse(JSON.stringify(HEADERS)));
    return axios.default
        .get(endpoint, {
          params: params,
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        })
        .then(
            (response) => {
              LOGGER.log('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        )
        .catch(
            (response) => {
              LOGGER.error('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        );
  },

  put: (endpoint, params) => {
    LOGGER.log('******Put=', JSON.parse(JSON.stringify(endpoint)));
    LOGGER.log('******Params=', JSON.parse(JSON.stringify(params)));
    LOGGER.log('******HEADERS=', JSON.parse(JSON.stringify(HEADERS)));
    return axios.default
        .put(endpoint, params, {
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        })
        .then(
            (response) => {
              LOGGER.log('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        )
        .catch(
            (response) => {
              LOGGER.error('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        );
  },

  delete: (endpoint, params) => {
    LOGGER.log('******Delete=', JSON.parse(JSON.stringify(endpoint)));
    return axios.default
        .delete(endpoint, {
          params: params,
          headers: HEADERS,
          validateStatus: (status) => validateStatus(status),
        })
        .then(
            (response) => {
              LOGGER.log('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        )
        .catch(
            (response) => {
              LOGGER.error('******response', JSON.parse(JSON.stringify(response)));
              return response.data;
            },
            (err) => {
              LOGGER.error('******err', JSON.parse(JSON.stringify(err)));
              return err.response || err;
            },
        );
  },
};

export {api};
