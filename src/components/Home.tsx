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
              <h2 className='light-blue slide-transition-1'>Hello World, I'm</h2>
              <h1 className='slide-transition-2'>Cody Beumer</h1>
                <div className='d-flex'>
                    <div className='typing-container'>
                        <p className='light-blue typing-text'>Full Stack Lead Software Developer</p>
                    </div>
                    <span className='typing-cursor'><strong>|</strong></span>
                </div>
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