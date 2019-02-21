import React from 'react';
import MasterLayout from './_layout/MasterLayout';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

const Home = (props) => {
    return (
        <MasterLayout>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <h1>{props.title}</h1>
                            <h5>{props.subTitle}</h5>
                            <p>
                                <Button
                                    tag="a"
                                    color="success"
                                    size="large"
                                    href="http://github.com/smaqeelkazmi/react-boilerplate/"
                                    target="_blank"
                                >
                                    {props.buttonText}
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </MasterLayout>
    );
};

export default Home;