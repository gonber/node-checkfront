require('dotenv').config();

const {
  CHECKFRONT_ENDPOINT: endpoint,
  CHECKFRONT_KEY: key,
  CHECKFRONT_SECRET: secret,
} = process.env;

const config = {
  endpoint,
  key,
  secret,
};

module.exports = require('..')(config);
