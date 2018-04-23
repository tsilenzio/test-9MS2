'use strict';

class Patient {
  index ({ view }) {
    return view.render('patient.index');
  }
}

module.exports = Patient;
