'use strict';

/**
 * @fileOverview Database model for questions
 * @author <a href="mailto:me@tsilenz.io">Taylor Silenzio</a>
 * 
 * @todo Implement ability to update the question
 * @todo Implement pagination for retrieving lists
 * @todo Reduce redundancy with headers
 */

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.DYNAMODB_TABLE,
};

module.exports = {
  create(event, context, callback) {
    const data = JSON.parse(event.body);

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        "id": uuid.v1(),
        "survey_id": data.surveyId,
        "response": data.response,
        "timestamp": new Date().getTime(),
      },
    };

    dynamoDb.put(params, (error) => {
      if (error) {
        // Log error in Lambda logs
        // TODO: Implement into UI
        console.error(error);

        callback(null, {
          statusCode: error.statusCode || 501,
          headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
          },
          body: 'Couldn\'t create the response item.',
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
        body: JSON.stringify(params.Item),
      };
      callback(null, response);
    });
  },

  list(event, context, callback) {
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
