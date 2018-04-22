'use strict';

/**
 * @fileOverview Database model for surveys
 * @author <a href="mailto:me@tsilenz.io">Taylor Silenzio</a>
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
          servey: "How are you feeling today?"
        }, {
          id: 2,
          servey: "What is your temperature?"
        }, {
          id: 3,
          servey: "How many times did you go to the bathroom today?"
        }, {
          id: 4,
          servey: "Any changes in symptons?"
        }, {
          id: 5,
          servey: "Any increase in pain?"
        }, {
          id: 6,
          servey: "How has your appetite been?"
        }, {
          id: 7,
          servey: "Are you drinking enough fluids?"
        }]),
    };
    callback(null, response);
  },
};
