import { INCREMENT, NUMERIC_PERCENTAGE } from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case INCREMENT: {
      const sumVotes = state.totalVotes + 1;
      const newCandidates = state.candidates.map((candidate) => {
        if (candidate.id === action.payload) {
          return { ...candidate, votes: candidate.votes + 1 };
        }
        const newPercentage = (candidate.votes * 100) / sumVotes;
        return { ...candidate, percentage: newPercentage };
      });
      return { ...state, candidates: newCandidates, totalVotes: sumVotes };
    }
    case NUMERIC_PERCENTAGE: {
      if (action.payload === false) {
        const newCandidates = state.candidates.map((candidate) => {
          const newDisplayVotes = (candidate.votes * 100) / state.totalVotes;
          return { ...candidate, votes: newDisplayVotes };
        });
        return { ...state, candidates: newCandidates };
      }

      if (action.payload === true) {
        const newCandidates = state.candidates.map((candidate) => {
          const newDisplayVotes = (candidate.votes * state.totalVotes) / 100;
          return { ...candidate, votes: newDisplayVotes };
        });
        return { ...state, candidates: newCandidates };
      }
      return state;
    }
  }
}
