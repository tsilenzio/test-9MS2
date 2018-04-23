'use strict';

/**
 * @fileOverview Database model for questions
 * @author <a href="mailto:me@tsilenz.io">Taylor Silenzio</a>
 * 
 * @todo Implement ability to update the question
 * @todo Implement pagination for retrieving lists
 * @todo Implement datatype enforcement in conjunction
 *          with the Questions lambda model
 */

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.DYNAMODB_TABLE,
};
const timestamp = parseInt(new Date().getTime() / 1000, 10);

function httpResponse({ statusCode, headers, data, callback }) {
  callback = callback || ((err, obj) => obj);

  return callback(null, {
    statusCode: statusCode || 200,
    headers: headers || {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    },
    body: JSON.stringify(data),
  });
}

module.exports = {
  // Create response object in the database
  create(event, context, callback) {
    const data = JSON.parse(event.body);

    // Cheap validation checking
    // TODO: add more validation checking
    if (typeof data.text !== 'string') {
      console.error('Validation Failed');
      httpResponse({
        statusCode: 400,
        data: { error: 'Couldn\'t create the response item.' },
        callback
      });
      return;
    }

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        'id': uuid.v1(),
        'text': data.text,
        'question': {
          'id': data.question.id,
          'text': data.question.text,
        },
        'timestamp': timestamp,
      },
    };

    // Apply changes to DynamoDB
    dynamoDb.put(params, (error) => {
      if (error) {
        // Log error in Lambda logs
        // TODO: Implement into UI
        console.error(error);
        httpResponse({
          statusCode: error.statusCode || 501,
          data: { error: 'Couldn\'t create the response item.' },
          callback
        });
        return;
      }

      httpResponse({
        data: JSON.stringify(params.Item),
        callback
      });
    });
  },

  // TODO: Refactor callback/response to make use of httpResponse
  list(event, context, callback) {
    // Fetch all the entries from DynamoDB
    dynamoDb.scan(params, (error, result) => {
      if (error) {
        // Log error in Lambda logs
        console.error(error);

        callback(null, {
          statusCode: error.statusCode || 501,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
          },
          body: 'Couldn\'t fetch the responses.',
        });
        return;
      }

      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
        },
        body: JSON.stringify(result.Items),
      };
      callback(null, response);
    });
  },
};
