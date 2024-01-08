import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import personalphoto from '../headshot.png';
import Image from 'react-bootstrap/Image';

type Props = {}

const Home = (props: Props) => {
  return (
    <Row className='home'>
          <Col className='d-flex align-items-center justify-content-end'>
            <div>
              <h5 className='light-blue slide-transition-1'>Hello World, I'm</h5>
              <h2 className='slide-transition-2'>Cody Beumer</h2>
              <p className='light-blue fade-in type-effect'>Full Stack Lead Software Developer</p>
            </div>
          </Col>
          
          <Col className='d-flex align-items-center justify-content-start'>
            <div>
              <Image src={personalphoto} roundedCircle /> 
            </div>
        </Col>
    </Row>
  )
}

export default Home