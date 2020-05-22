import React from "react";
import LoginBtn from "../components/LoginBtn";
import { Container, Row, Col } from "../components/Grid";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size="s12">
                        <LoginBtn />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Home;