export function saveAnswers(answers) {
  return {
    type: 'SAVE_ANSWERS',
    payload: { answers },
  };
}
