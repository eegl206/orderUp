import React from "react";
import LoginBtn from "../components/LoginBtn";
import { Container, Row, Col } from "../components/Grid";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12 center">
                        <LoginBtn />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Home;