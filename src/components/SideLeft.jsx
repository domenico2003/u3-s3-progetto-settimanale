import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import logo from "./logo/Spotify_Logo.png";
import { FaBookOpen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { search, setQueryAction } from "../redux/Actions";
const SideLeft = () => {
  let dispatch = useDispatch();
  let location = useLocation();
  let query = useSelector((state) => state.fetchs.searchResults.query);

  return (
    <>
      <Navbar
        expand="md"
        bg="navbar"
        className="navbar-white fixed-left justify-content-between"
        id="sidebar"
      >
        <Container
          fluid
          className="flex-column  align-items-start text-white-50"
        >
          <Navbar.Brand class="pt-4 ">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>

          <Link
            to="/"
            className="nav-link d-block ms-3 my-2 fs-5 d-flex align-items-center"
          >
            <FaHome className="fs-3" />
            &nbsp; Home
          </Link>

          <Link
            to="/placeHolder"
            className="nav-link d-block ms-3 my-2 fs-5 d-flex align-items-center"
          >
            <FaBookOpen className="fs-3" />
            &nbsp; Your Library
          </Link>
          {location.pathname === "/" && (
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                class="form-control mb-2"
                id="searchField"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={query}
                onChange={(e) => {
                  dispatch(setQueryAction(e.target.value));
                }}
              />
              <div class="input-group-append mb-1">
                <Button
                  variant="outline-secondary"
                  type="button"
                  id="button-addon1"
                  onClick={() => {
                    dispatch(search());
                    dispatch(setQueryAction(""));
                  }}
                >
                  GO
                </Button>
              </div>
            </InputGroup>
          )}
        </Container>

        <div class="nav-btn">
          <span class=" signup-btn py-2" type="button">
            Sign Up
          </span>
          <span class=" login-btn d-block py-2" type="button">
            Login
          </span>
          <a href="#placeholder">Cookie Policy</a> |
          <a href="#placeholder"> Privacy</a>
        </div>
      </Navbar>
    </>
  );
};

export default SideLeft;
