import React, {Component} from 'react';
import {
    Row,
    Col,
    Carousel
} from 'antd';

export default class PCNewsContainer extends Component {

    render() {
        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="container">
                    <div className="left-container">
                        <div className="carousel">
                            <Carousel autoplay>
                                {/* TODO: will be improved later */}
                                <div><img src={require('../images/carousel_1.jpg')} alt="轮播图1" width="400"
                                          height="400"/></div>
                                <div><img src={require('../images/carousel_2.jpg')} alt="轮播图2" width="400"
                                          height="400"/></div>
                                <div><img src={require('../images/carousel_3.jpg')} alt="轮播图3" width="400"
                                          height="400"/></div>
                                <div><img src={require('../images/carousel_4.jpg')} alt="轮播图4" width="400"
                                          height="400"/></div>
                            </Carousel>
                        </div>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    }
}
