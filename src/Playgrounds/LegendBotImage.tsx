import { Container, Image } from "react-bootstrap"

interface LegendBotImageProps {
    src: string
    desc: string
}
function LegendBotImage({ src, desc }: LegendBotImageProps) {
    return (
        <Container className="mt-2">
            <Image src={`../discord_bot_assets/${src}`} className="d-block mx-auto" fluid rounded/>
            <p className="text-center text-muted mt-4 fst-italic fs-5 fw-light">{desc}</p>
            <hr className="my-4"></hr>
        </Container>
    )
}

export default LegendBotImage