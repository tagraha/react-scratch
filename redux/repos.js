import "isomorphic-fetch";

// Actions
const FETCH_REPOS_REQUEST = "FETCH_REPOS_REQUEST";
const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
const FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE";

// initial store
const initial = {
  list: [],
  fetched: false
}

// Reducer
export default function reducer(state = initial, action) {
  switch (action.type) {
    case FETCH_REPOS_SUCCESS: {
      return { ...state, list: action.payload, fetched: true };
    }
    default: {
      return state;
    }
  }
}

// Action Creators
const requestRepos = () => ({ type: FETCH_REPOS_REQUEST });
const receivedRepos = repos => ({ type: FETCH_REPOS_SUCCESS, payload: repos });
const getReposError = () => ({ type: FETCH_REPOS_FAILURE });

export const fetchRepos = () => (dispatch, getState) => {
  dispatch(requestRepos());
  return fetch("https://api.github.com/users/tagraha/repos")
    .then(response => response.json())
    .then(repos => dispatch(receivedRepos(repos)))
    .catch(err => dispatch(getReposError(err)));
};