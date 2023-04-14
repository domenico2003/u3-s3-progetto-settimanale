import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Library from "./Library";
import SingleCardHome from "./SingleCardHome";
import { useEffect } from "react";
import {
  handleArtist,
  seHipHopContentAction,
  setHipHopArtistAction,
  setPopArtistAction,
  setPopContentAction,
  setRockArtistAction,
  setRockContentAction,
} from "../redux/Actions";

const Home = () => {
  let songsSearch = useSelector((state) => state.fetchs.searchResults.content);

  let RockContent = useSelector(
    (state) => state.fetchs.HomeFetchs.Rock.content
  );
  let popContent = useSelector((state) => state.fetchs.HomeFetchs.pop.content);
  let hipHopContent = useSelector(
    (state) => state.fetchs.HomeFetchs.hipHop.content
  );

  let dispach = useDispatch();

  return (
    <>
      <div class="row mb-3">
        <div class="col-9 col-lg-11 mainLinks text-white-50 cursor  d-none d-md-flex">
          <span className=" hover">TRENDING</span>
          <span className=" hover">PODCAST</span>
          <span className=" hover">MOODS AND GENRES</span>
          <span className=" hover">NEW RELEASES</span>
          <span className=" hover">DISCOVER</span>
        </div>
      </div>

      <Row>
        <div class="col-10">
          <div
            id="searchResults"
            className={!songsSearch.length > 0 && "d-none"}
          >
            <h2>Search Results</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {songsSearch.length > 0 &&
                songsSearch.map((song) => {
                  console.log(song);
                  return <SingleCardHome song={song} />;
                })}
            </div>
          </div>
        </div>
      </Row>
      <div className="mb-5 pb-5">
        <Library title={"Rock Classics"} genere={RockContent} />
        <Library title={"Pop Culture"} genere={popContent} />
        <Library title={"#HipHop"} genere={hipHopContent} />
      </div>
    </>
  );
};

export default Home;
