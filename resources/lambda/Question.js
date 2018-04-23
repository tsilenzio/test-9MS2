'use strict';

/**
 * @fileOverview Database model for surveys
 * @author <a href="mailto:me@tsilenz.io">Taylor Silenzio</a>
 * 
 * @todo Move the questions into the database
 * @todo Refactor callback/response to make use of httpResponse
 * @todo Implement expected or acceptable datatypes
 */

module.exports = {
  list(event, context, callback) {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
      },
      body: JSON.stringify(
        [{
          id: 1,
          text: "How are you feeling today?"
        }, {
          id: 2,
          text: "What is your temperature?"
        }, {
          id: 3,
          text: "How many times did you go to the bathroom today?"
        }, {
          id: 4,
          text: "Any changes in symptons?"
        }, {
          id: 5,
          text: "Any increase in pain?"
        }, {
          id: 6,
          text: "How has your appetite been?"
        }, {
          id: 7,
          text: "Are you drinking enough fluids?"
        }]),
    };
    callback(null, response);
  },
};
