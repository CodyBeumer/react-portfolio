import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

type Props = {}

const About = (props: Props) => {
  return (
    <Row>
        <Col>
            <Card bg="dark" data-bs-theme="dark">
                <Card.Header>About</Card.Header>
                <Card.Body>
                    <p>
                        Hello and welcome to my personal website! I am <strong>Cody Beumer</strong>, 
                        a seasoned lead software developer with a passion for crafting innovative and 
                        efficient solutions. With a wealth of experience in the dynamic world of software 
                        development, I thrive on transforming complex ideas into elegant, user-friendly 
                        applications. My journey in the realm of coding has equipped me with a diverse skill set, 
                        including proficiency in various programming languages and a keen eye for detail. Whether 
                        it's architecting scalable systems, optimizing code for performance, or leading a talented 
                        team, I am dedicated to pushing the boundaries of what technology can achieve. Join me 
                        on this exciting journey as we navigate the ever-evolving landscape of software 
                        development together.
                    </p>
                </Card.Body>
            </Card>
            
        </Col>
  </Row>
  )
}

export default About