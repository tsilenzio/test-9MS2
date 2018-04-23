'use strict';

const rest = require('rest-facade');
const _ = require('lodash');
const Env = use('Env');
const API_URL = Env.get('API_URL');

class Patient {
  getIndex ({ view }) {
    var Questions = new rest.Client(API_URL + '/questions', {
      errorFormatter: {
        name: 'error.title',
        message: 'error.text',
      }
    });

    return Questions
      .getAll()
      .then(function (questions) {
        return view.render('patient.index', { questions });
      });
  }

  async postIndex ({ request, view }) {
    let data = _.omit(request.post(), '_csrf');
    let promises = [];

    var Responses = new rest.Client(API_URL + '/responses', {
      errorFormatter: {
        name: 'error.title',
        message: 'error.text',
      }
    });

    for(let i = 0; i < data.question_id.length; i++) {
      promises.push(
        Responses
          .create({
            text: data.response_text[i],
            question: {
              id: i,
              text: data.question_text[i],
            }
          })
      );
    }

    await Promise.all(promises).catch((err) => {
      // TODO: Implement error handling
      console.error(err);
    })

    return view.render('patient.confirmation');
  }
}

module.exports = Patient;
