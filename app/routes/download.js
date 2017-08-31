const preview = require('../templates/preview');
const download = require('../templates/download');

module.exports = function(state, emit) {
  if (state.transfer && state.transfer.msg !== 'initialized') {
    return download(state, emit);
  }
  return preview(state, emit);
};
