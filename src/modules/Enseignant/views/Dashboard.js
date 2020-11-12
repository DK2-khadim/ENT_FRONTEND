import React, { Component } from 'react';
import PanelHeader from './../../../components/PanelHeader/PanelHeader';

import {
    Row,Col,Card,CardBody,CardTitle,CardHeader
} from 'reactstrap';

class Dashboard extends Component {
    render(){
        return(
            <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                            <CardTitle tag="h4">Enseignant</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h1>Hello world</h1>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}

export default Dashboard