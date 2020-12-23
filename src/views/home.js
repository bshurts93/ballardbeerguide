import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-hero">
      <Row className="landing-box">
        <h1 className="landing-box__title">
          Ballard <br /> Beer <br /> Guide
        </h1>
      </Row>
      <Row gutter={[16, 16]} style={{ padding: "10px" }}>
        <Col span={12}>
          <Button ghost block>
            <Link to="/neighborhood">Show me around</Link>
          </Button>
        </Col>
        <Col span={12}>
          <Button ghost block>
            Make a profile
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
