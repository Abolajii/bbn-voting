import { staticHousemates } from "../../data";
import { INCREASE_VOTE, DECREASE_VOTE } from "./constant";

const intialState = {
  housemates: staticHousemates,
  maximiumVotes: 10,
};

const voteReducer = (state = intialState, action) => {
  const { housemates, maximiumVotes } = state;
  let maximiumVotesClone = maximiumVotes;
  let maximiumVotesClone2 = maximiumVotes;
  switch (action.type) {
    case INCREASE_VOTE:
      let housematesClone = [...housemates];
      housematesClone.map((hm) => {
        const { id } = hm;
        if (id === action.payload) {
          if (hm.votes >= 10) {
            return hm;
          }
          if (maximiumVotesClone !== 0) {
            maximiumVotesClone = maximiumVotesClone - 1;
            hm.votes = hm.votes + 1;
          }
        }
        return hm;
      });

      return {
        ...state,
        housemates: housematesClone,
        maximiumVotes: maximiumVotesClone,
      };
    case DECREASE_VOTE:
      let housematesClone1 = [...housemates];
      housematesClone1.map((hm) => {
        const { id } = hm;

        if (id === action.payload) {
          if (hm.votes === 0) {
            return hm;
          }
          maximiumVotesClone2 = maximiumVotesClone2 + 1;
          hm.votes = hm.votes - 1;
        }
        return hm;
      });

      return {
        ...state,
        housemates: housematesClone1,
        maximiumVotes: maximiumVotesClone2,
      };

    default:
      return state;
  }
};

export { voteReducer };
