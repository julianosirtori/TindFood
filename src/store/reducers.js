import produce from 'immer';

import data from '../data/data.json';

const INITIAL_STATE = {
  questions: [...data.questions],
  answers: [],
};

export default function reduce(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SAVE_ANSWERS': {
        draft.answers = action.payload.answers;
        break;
      }
      default:
        break;
    }
  });
}
