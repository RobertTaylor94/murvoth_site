import { Container, Col, Row, Card } from "react-bootstrap";
import Navbar from "../NavBar";
import LegendBotImage from "./LegendBotImage";

function LegendBot() {

  const commands = [
    { title: "Expression Roll", command: "/q" },
    { title: "Add Custom Roll", command: "/cr add" },
  ]

  const images = [
    { src: "image1.png", desc: "expression roll `/q 1d20`" },
    { src: "image2.png", desc: "viewing a users saved rolls `/cr check`" },
    { src: "image3.png", desc: "rolling a saved roll `/cr roll bow`" },
    { src: "image4.png", desc: "update the dice colour `/conf update color:purple`" }
  ]

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-3">
        <Col >
          <Row>
            <Card className="p-3">
              <Card.Title>Legend Bot</Card.Title>
              <Card.Body>
                <Card.Text>
                  I first started creating the Legend Bot when I was trying to upskill in Python. I wrote a very basic bot using the _____ discord library and implemented dice rolling and inventory management. Eventually I switched to using Golang for most of my projects after learning it with work so decided to write the bot in Go. <br></br><br></br>The bot currently includes normal dice expression rolling as well as the ability to save custom expressions to your user profile allowing for easy rolling of long expressions. The bot can also be configured by the user to change their dice colour.<br /><br />On the roadmap is reimplementing inventory management and upgrading saved custom attack rolls to display a button to roll the appropriate damage without retyping a command.
                </Card.Text>
                <a href="https://github.com/RobertTaylor94/DiscordBot_Golang">GitHub Repository</a>
              </Card.Body>
            </Card>
          </Row>

          <Row className="mt-3">
          <Card className="p-3">
            <Card.Title>Images</Card.Title>
            <Col>
              {images.map((image, index) => (
                <LegendBotImage src={image.src} desc={image.desc} key={index} />
              ))}
            </Col>
          </Card>
          </Row>
        </Col>

        <Col>
          <Card className="p-3">
            <Card.Title>Commands</Card.Title>
            {commands.map((command, index) => (
              <Card className="mt-3 p-2" key={index}>
                <Card.Title>{command.title}</Card.Title>
                <Card.Text>{command.command}</Card.Text>
              </Card>
            ))}
          </Card>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default LegendBot;
