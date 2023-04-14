import { DELETE_SONG, SELECT_SONG, SET_SINGLE_SONG } from "../Actions";

let InitialState = {
  songsSelected: {
    content: [],
  },
  singleSongSelected: {
    content: null,
  },
};

export const secondaryReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        songsSelected: {
          ...state.songsSelected,
          content: [...state.songsSelected.content, action.payload],
        },
      };
    case DELETE_SONG:
      return {
        ...state,
        songsSelected: {
          ...state.songsSelected,
          content: [
            ...state.songsSelected.content.filter(
              (song) => song.id !== action.payload.id
            ),
          ],
        },
      };

    case SET_SINGLE_SONG:
      return {
        ...state,
        singleSongSelected: {
          ...state.singleSongSelected,
          content: action.payload,
        },
      };

    default:
      return state;
  }
};
