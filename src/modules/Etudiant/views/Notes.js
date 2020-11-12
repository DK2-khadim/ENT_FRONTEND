import React, { Component } from 'react';

import PanelHeader from './../../../components/PanelHeader/PanelHeader';

import {
    Row,Col,Card,CardBody,CardTitle,CardHeader
} from 'reactstrap';


class Notes extends Component {
    render(){
        return(
            <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                            <CardTitle tag="h4">Note</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <h1>Mes notes</h1>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}

export default Notes