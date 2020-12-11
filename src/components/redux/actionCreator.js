const { DECREASE_VOTE, INCREASE_VOTE } = require("./constant");

const increaseVote = (id) => {
  return {
    type: INCREASE_VOTE,
    payload: id,
  };
};

const decreaseVote = (id) => {
  return {
    type: DECREASE_VOTE,
    payload: id,
  };
};

export { increaseVote, decreaseVote };
