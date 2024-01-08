import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

type Props = {}

const Skills = (props: Props) => {
  return (
    <Row>
        <Col>
            <Card bg="dark" data-bs-theme="dark">
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                    <Tabs defaultActiveKey="languages" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="languages" title="Languages">
                            <ul>
                                <li>Java</li>
                                <li>C++</li>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>C#</li>
                                <li>Sql</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="frameworks" title="Frameworks">
                            <ul>
                                <li>Knockoutjs</li>
                                <li>.NET</li>
                                <li>Reactjs</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="tools" title="Tools">
                            <ul>
                                <li>Visual Studio</li>
                                <li>Sql Server Management Studio</li>
                                <li>Azure DevOps</li>
                                <li>Azure Portal</li>
                            </ul>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default Skills