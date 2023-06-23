import { INCREMENT, NUMERIC_PERCENTAGE } from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case INCREMENT: {
      const sumVotes = state.totalVotes + 1;
      const newCandidates = state.candidates.map((candidate) => {
        if (candidate.id === action.payload) {
          const addVote = candidate.votes + 1;
          const addPercentage = (addVote * 100) / sumVotes;
          return {
            ...candidate,
            votes: addVote,
            percentage: addPercentage,
          };
        }
        const addPercentage = (candidate.votes * 100) / sumVotes;
        return { ...candidate, percentage: addPercentage };
      });
      return { ...state, candidates: newCandidates, totalVotes: sumVotes };
    }
    case NUMERIC_PERCENTAGE: {
      if (action.payload === "percentage") {
        return { ...state, showResultType: "percentage" };
      } else if (action.payload === "numeric") {
        return { ...state, showResultType: "numeric" };
      }
    }
  }
}
