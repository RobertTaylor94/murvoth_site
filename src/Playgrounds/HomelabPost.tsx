import { Card, Container, Row, Col, Image } from "react-bootstrap"


interface HomelabPostProps {
    title: string
    body: string
    timestamp: string
}

function HomelabPost({ title, body, timestamp }: HomelabPostProps) {
    return (
        <Container className="mt-3">
            <Card>
                <Row className="align-items-center g-1">
                    <Col xs="auto" className="" style={{
                        width: '100px',
                        paddingLeft: '40px',
                        paddingTop: '20px'
                        }}>
                    <Image
                        src="../profilePhoto.jpeg"
                        roundedCircle
                        alt="Profile"
                        className=""
                        style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                        }}/>
                    </Col>
                    
                    <Col className="p-0">
                        <Card.Title className="mt-4">{title}</Card.Title>
                        <Card.Text className="text-body-tertiary">{timestamp}</Card.Text>
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Text className="p-2">
                        {body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default HomelabPost