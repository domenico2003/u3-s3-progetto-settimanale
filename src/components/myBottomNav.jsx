import { Col, Container, Row } from "react-bootstrap";
import previous from "./playerbuttons/Previous.png";
import shuffle from "./playerbuttons/Shuffle.png";
import Play from "./playerbuttons/Play.png";
import Next from "./playerbuttons/Next.png";
import Repeat from "./playerbuttons/Repeat.png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetHipHopArtistAction,
  resetPopArtistAction,
  resetRockArtistAction,
  setHipHopArtistAction,
  setPopArtistAction,
  setRockArtistAction,
} from "../redux/Actions";

const MyBottomNav = () => {
  let dispach = useDispatch();
  useEffect(() => {
    dispach(resetRockArtistAction());
    dispach(resetPopArtistAction());
    dispach(resetHipHopArtistAction());
    artistsRandom();
  }, []);

  let artistsRandom = () => {
    let rockArtists = [
      "queen",
      "u2",
      "thepolice",
      "eagles",
      "thedoors",
      "oasis",
      "thewho",
      "bonjovi",
    ];

    let popArtists = [
      "maroon5",
      "coldplay",
      "onerepublic",
      "jamesblunt",
      "katyperry",
      "arianagrande",
    ];

    let hipHopArtists = [
      "eminem",
      "snoopdogg",
      "lilwayne",
      "drake",
      "kanyewest",
    ];

    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      dispach(setRockArtistAction(rockRandomArtists[j]));

    for (let k = 0; k < popRandomArtists.length; k++)
      dispach(setPopArtistAction(popRandomArtists[k]));

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      dispach(setHipHopArtistAction(hipHopRandomArtists[l]));
  };

  let songSelected = useSelector(
    (state) => state.secondary.singleSongSelected.content
  );
  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row>
          {songSelected && (
            <Col lg={4} className="d-flex justify-content-end text-white">
              <div>
                <span className="mt-3 d-block">{songSelected.title_short}</span>
                <span>{songSelected.artist.name}</span>
              </div>
            </Col>
          )}
          <Col
            lg={songSelected ? 8 : 10}
            className={` ${!songSelected ? "offset-lg-2" : ""}`}
          >
            <Row>
              <Col
                xs={6}
                md={4}
                lg={2}
                className=" offset-3 offset-md-4 offset-lg-5 playerControls mt-3"
              >
                <Row xs={5}>
                  <span>
                    <img height={15} src={shuffle} alt="shuffle" />
                  </span>
                  <span>
                    <img height={15} src={previous} alt="shuffle" />
                  </span>
                  <span>
                    <img height={15} src={Play} alt="shuffle" />
                  </span>
                  <span>
                    <img height={15} src={Next} alt="shuffle" />
                  </span>
                  <span>
                    <img height={15} src={Repeat} alt="shuffle" />
                  </span>
                </Row>
              </Col>
            </Row>
            <Row className=" justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyBottomNav;
