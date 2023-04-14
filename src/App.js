import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyBottomNav from "./components/myBottomNav";
import { Col, Container, Row } from "react-bootstrap";
import SideLeft from "./components/SideLeft";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  handleArtist,
  seHipHopContentAction,
  setPopContentAction,
  setRockContentAction,
} from "./redux/Actions";

function App() {
  let dispach = useDispatch();
  let popArtist = useSelector(
    (state) => state.fetchs.HomeFetchs.pop.artistName
  );
  let Rock = useSelector((state) => state.fetchs.HomeFetchs.Rock.artistName);
  let HipHopArtist = useSelector(
    (state) => state.fetchs.HomeFetchs.hipHop.artistName
  );

  useEffect(() => {
    if (HipHopArtist.length > 0) {
      HipHopArtist.forEach((artist) => {
        dispach(handleArtist(artist, seHipHopContentAction));
      });
    }
    if (popArtist.length > 0) {
      popArtist.forEach((artist) => {
        dispach(handleArtist(artist, setPopContentAction));
      });
    }
    if (Rock.length > 0) {
      Rock.forEach((artist) => {
        dispach(handleArtist(artist, setRockContentAction));
      });
    }
  }, [HipHopArtist, Rock, popArtist]);
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideLeft />
          </Col>
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <MyBottomNav />
    </BrowserRouter>
  );
}

export default App;
