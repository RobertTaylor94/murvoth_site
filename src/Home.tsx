import { Container, Col, Row, Card, Image } from "react-bootstrap"

function Home() {
    return (
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Row className="mb-3">
                  <Col className="text-center">
                    <Image
                      src="profilePhoto.jpeg"
                      roundedCircle
                      alt="Profile"
                      style={{
                        width: "250px",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                </Row>
                <Row >
                  <Col className="text-center">
                    <p>Robert Taylor</p>
                  </Col>
                </Row>
              </Col>

              <Col className="d-flex align-items-center">
                <div className="rounded border border-dark p-3 w-100">
                  <h3>Bio</h3>
                  <p>Hello, World!</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
}

export default Home