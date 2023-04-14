import { Col, Row } from "react-bootstrap";
import SingleCardHome from "./SingleCardHome";

const Library = ({ title, genere }) => {
  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>{title}</h2>
          <Row
            xs={1}
            sm={2}
            lg={3}
            xl={4}
            class="imgLinks py-3"
            id="rockSection"
          >
            {genere.map((album) => {
              return <SingleCardHome song={album} />;
            })}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Library;
