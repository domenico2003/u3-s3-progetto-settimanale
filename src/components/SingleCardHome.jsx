import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteSongAction,
  selectSongAction,
  setSingleSongAction,
} from "../redux/Actions";

const SingleCardHome = ({ song }) => {
  let dispatch = useDispatch();
  let [songHover, setSongHover] = useState(false);
  let [favouriteSong, setFavouriteSong] = useState(false);
  let favourites = useSelector(
    (state) => state.secondary.songsSelected.content
  );
  useEffect(() => {
    favourites.map((singleSong) => {
      singleSong.id === song.id && setFavouriteSong(true);
    });
    console.log(favourites);
  }, [favouriteSong, favourites]);

  return (
    <>
      <div
        className="col text-center"
        onMouseLeave={() => setSongHover(false)}
        kay={song.album.id}
      >
        <div className="position-relative ">
          <img
            className="img-fluid cursor"
            onMouseOver={() => setSongHover(true)}
            src={song.album.cover_medium}
            alt="1"
            onClick={() => {
              dispatch(setSingleSongAction(song));
            }}
          />
          {songHover &&
            (favouriteSong ? (
              <AiFillStar
                className="position-absolute fs-1 my-star "
                onClick={() => {
                  dispatch(deleteSongAction(song));
                  setFavouriteSong(false);
                }}
              />
            ) : (
              <AiOutlineStar
                className="position-absolute fs-1 my-star "
                onClick={() => {
                  dispatch(selectSongAction(song));
                  setFavouriteSong(true);
                }}
              />
            ))}
        </div>
        <p>
          <Link to={`/albumPage/${song.album.id}`}>
            Album: "
            {song.album.title.length < 16
              ? `${song.album.title}`
              : `${song.album.title.substring(0, 16)}...`}
            "<br />
          </Link>
          <Link to={`/artisPage/${song.artist.id}`}>
            Artist: {song.artist.name}
          </Link>
        </p>
      </div>
    </>
  );
};
export default SingleCardHome;
