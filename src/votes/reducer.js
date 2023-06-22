export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      //   const newCandidates = state.candidates.map((candidate) => {
      //     return { ...candidate, votes: candidate.votes + 1 };
      //   });
      //   return { ...state, candidates: newCandidates };

      const newCandidates = state.candidates.map((candidate) => {
        if (candidate.id === action.payload) {
          return { ...candidate, votes: candidate.votes + 1 };
        }
        return candidate;
      });
      return { ...state, candidates: newCandidates };
    }
  }
}
