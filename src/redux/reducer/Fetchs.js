import {
  RESET_HIPHOP_ARTIST,
  RESET_POP_ARTIST,
  RESET_QUERY,
  RESET_ROCK_ARTIST,
  SET_HIPHOP_ARTIST,
  SET_HIPHOP_CONTENT,
  SET_POP_ARTIST,
  SET_POP_CONTENT,
  SET_QUERY,
  SET_ROCK_ARTIST,
  SET_ROCK_CONTENT,
  SET_SEARCH,
} from "../Actions";

let InitialState = {
  searchResults: {
    content: [],
    query: "",
  },
  HomeFetchs: {
    Rock: {
      content: [],
      artistName: "",
    },
    pop: {
      content: [],
      artistName: "",
    },
    hipHop: {
      content: [],
      artistName: "",
    },
  },
};

export const Fetchs = (state = InitialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          content: action.payload,
        },
      };
    case SET_QUERY:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          query: action.payload,
        },
      };
    case RESET_QUERY:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          query: "",
        },
      };
    case SET_ROCK_ARTIST:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          Rock: {
            ...state.HomeFetchs.Rock,
            artistName: [...state.HomeFetchs.Rock.artistName, action.payload],
          },
        },
      };
    case SET_POP_ARTIST:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          pop: {
            ...state.HomeFetchs.pop,
            artistName: [...state.HomeFetchs.pop.artistName, action.payload],
          },
        },
      };
    case SET_HIPHOP_ARTIST:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          hipHop: {
            ...state.HomeFetchs.hipHop,
            artistName: [...state.HomeFetchs.hipHop.artistName, action.payload],
          },
        },
      };
    case SET_HIPHOP_CONTENT:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          hipHop: {
            ...state.HomeFetchs.hipHop,
            content: [...state.HomeFetchs.hipHop.content, action.payload],
          },
        },
      };
    case SET_POP_CONTENT:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          pop: {
            ...state.HomeFetchs.pop,
            content: [...state.HomeFetchs.pop.content, action.payload],
          },
        },
      };
    case SET_ROCK_CONTENT:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          Rock: {
            ...state.HomeFetchs.Rock,
            content: [...state.HomeFetchs.Rock.content, action.payload],
          },
        },
      };
    case RESET_HIPHOP_ARTIST:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          hipHop: {
            ...state.HomeFetchs.hipHop,
            artistName: "",
            content: [],
          },
        },
      };
    case RESET_POP_ARTIST:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          pop: {
            ...state.HomeFetchs.pop,
            artistName: "",
            content: [],
          },
        },
      };
    case RESET_ROCK_ARTIST:
      return {
        ...state,
        HomeFetchs: {
          ...state.HomeFetchs,
          Rock: {
            ...state.HomeFetchs.Rock,
            artistName: "",
            content: [],
          },
        },
      };
    default:
      return state;
  }
};
