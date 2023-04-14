export let SET_SEARCH = "SET_SEARCH";
export let SET_QUERY = "SET_QUERY";
export let RESET_QUERY = "SET_QUERY";
export let SET_HIPHOP_ARTIST = "SET_HIPHOP_ARTIST";
export let SET_POP_ARTIST = "SET_POP_ARTIST";
export let SET_ROCK_ARTIST = "SET_ROCK_ARTIST";
export let SET_ROCK_CONTENT = "SET_ROCK_CONTENT";
export let SET_POP_CONTENT = "SET_POP_CONTENT";
export let SET_HIPHOP_CONTENT = "SET_HIPHOP_CONTENT";
export let RESET_ROCK_ARTIST = "RESET_ROCK_ARTIST";
export let RESET_POP_ARTIST = "RESET_POP_ARTIST";
export let RESET_HIPHOP_ARTIST = "RESET_HIPHOP_ARTIST";
export let SELECT_SONG = " SELECT_SONG";
export let DELETE_SONG = " DELETE_SONG";
export let SET_SINGLE_SONG = " SET_SINGLE_SONG";

export let setSingleSongAction = (dato) => {
  return { type: SET_SINGLE_SONG, payload: dato };
};

export let selectSongAction = (dato) => {
  return { type: SELECT_SONG, payload: dato };
};
export let deleteSongAction = (dato) => {
  return { type: DELETE_SONG, payload: dato };
};
export let setPopContentAction = (dato) => {
  return { type: SET_POP_CONTENT, payload: dato };
};
export let setRockContentAction = (dato) => {
  return { type: SET_ROCK_CONTENT, payload: dato };
};
export let seHipHopContentAction = (dato) => {
  return { type: SET_HIPHOP_CONTENT, payload: dato };
};

export let resetPopArtistAction = () => {
  return { type: RESET_POP_ARTIST };
};
export let resetRockArtistAction = (o) => {
  return { type: RESET_ROCK_ARTIST };
};
export let resetHipHopArtistAction = (o) => {
  return { type: RESET_HIPHOP_ARTIST };
};

export let setSearchAction = (dato) => {
  return { type: SET_SEARCH, payload: dato };
};

export let setHipHopArtistAction = (dato) => {
  return { type: SET_HIPHOP_ARTIST, payload: dato };
};
export let setPopArtistAction = (dato) => {
  return { type: SET_POP_ARTIST, payload: dato };
};
export let setRockArtistAction = (dato) => {
  return { type: SET_ROCK_ARTIST, payload: dato };
};

export let setQueryAction = (stringa) => {
  return { type: SET_QUERY, payload: stringa };
};
export let resetQueryAction = () => {
  return { type: RESET_QUERY };
};

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});
export let search = () => {
  return async (dispatch, state) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          state().fetchs.searchResults.query,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let result = await response.json();
        let songs = result.data;
        dispatch(setSearchAction(songs));
        dispatch(resetQueryAction());
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export let handleArtist = (artistName, dispatchContent) => {
  return async (dispatch, state) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let result = await response.json();
        let songInfo = result.data[0];
        dispatch(dispatchContent(songInfo));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
