import { Container } from "react-bootstrap";
import NavBar from "../NavBar";
import HomelabPost from "./HomelabPost";


function Homelab() {

    const posts = [
        { title: "What we have so far...", body: "My current poor little setup is quite constricted due to living arrangemnts. Renting in a HMO with one central router I don't have access to is obviosuly not ideal in these situations but with ethernet in every room I setup my own router as a sub network in the house that only my devices connect to. Sat neatly under that is a 2014 Mac Mini that is performing remarkably (upgrades when I have moneys). This is running proxmox with two containers, one for pihole and one for docker. PiHole seems like a standard go to for getting a Homelab setup, it is my network wide ad blocker and serves as a local DNS so I can use my domain name and subdomains to access all my services. Then ext container is running docker, in here I have a couple of things running, the first is NGINX Proxy Manager, a beautiful container that hosts nginx and a web UI that lets me manage all my routes. Other containers, and ones NPM points to are my personal website (also hosted on OCI) and Portainer, showing me stats from running docker containers and letting me interact with docker through a UI. The final docker container running hosts my Legend Bot that I use when playing a TTRPG on discord.", timestamp: "15/02/2025" },
        { title: "Welcome to my Home", body: "I have been excited to start my Homelab'ing journey for ages and I've been tinkering away for about 10 months now. This is mainly for personal prosperity (and documentation) but this is my story so far and I hope to keep up with posts about changes to my setup.", timestamp: "14/02/2025" }    ]

    return (
        <>
            <NavBar />
            <Container>
                <h3 className="p-3">Homelab</h3>
                {posts.map((post, index) => (
                    <HomelabPost title={post.title} body={post.body} timestamp={post.timestamp} key={index}/>
                ))}
            </Container>
        </>
    )
}

export default Homelab