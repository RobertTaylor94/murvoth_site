import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router";

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  desc: string;
  link: string;
}

function ProjectCard({ title, imgSrc, desc, link }: ProjectCardProps) {
  return (
    <Card className="w-100">
      <Card.Body>
        <Row>
          <Col md={6} className="d-flex flex-column">
            <Card.Title className="mx-auto p-2"><Link to={link}>{title}</Link></Card.Title>
            <Card.Img
              className="p-2 rounded border m-2 h-100"
              src={imgSrc}
            ></Card.Img>
          </Col>

          <Col md={6} className="d-flex align-items-center">
            <Card.Text className="p-2">{desc}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard