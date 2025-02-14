import { Card } from "react-bootstrap"

interface LegendBotCommandProps {
    title: string
    command: string
}
function LegendBotCommand({ title, command }: LegendBotCommandProps) {
    return (
        <Card>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body>
                {command}
            </Card.Body>
        </Card>
    )
}

export default LegendBotCommand