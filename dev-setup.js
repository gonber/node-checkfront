/* eslint-disable import/no-extraneous-dependencies, no-console */

const prompts = require('prompts');
const fs = require('fs-extra');
const _ = require('lodash');

async function main() {
  const response = await prompts([
    {
      type: 'text',
      name: 'endpoint',
      message: 'What is your Checkfront API enpoint?',
    },
    {
      type: 'text',
      name: 'key',
      message: 'What is your Checkfront API key?',
    },
    {
      type: 'text',
      name: 'secret',
      message: 'What is your Checkfront API secret?',
    },
  ]);
  await fs.writeFile('.env',
    _.join([
      `CHECKFRONT_ENDPOINT=${response.endpoint}`,
      `CHECKFRONT_KEY=${response.key}`,
      `CHECKFRONT_SECRET=${response.secret}`,
    ],
    '\n'));
  console.log('Finished creating .env file');
}

main();
