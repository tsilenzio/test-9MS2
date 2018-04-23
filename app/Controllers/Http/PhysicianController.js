'use strict'

const rest = require('rest-facade');
const _ = require('lodash');
const moment = require('moment');
const Env = use('Env');
const API_URL = Env.get('API_URL');

class Physician {
  async getIndex({ view }) {
    var Responses = new rest.Client(API_URL + '/responses', {
      errorFormatter: {
        name: 'error.title',
        message: 'error.text',
      }
    });

    return Responses
      .getAll()
      .then(function (responses) {
        responses = _
          .chain(responses)
          .sortBy('timestamp')
          .map(obj => {
            return Object.assign(obj, {
              timestamp: moment(obj.timestamp * 1000).format('L LT')
            });
          })
          .value();

        return view.render('physician.index', { responses });
      });
  }
}

module.exports = Physician
