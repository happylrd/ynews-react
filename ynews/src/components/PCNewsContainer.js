import React, {Component} from 'react';
import {
    Row,
    Col,
    Carousel,
    Tabs
} from 'antd';

import PCNewsBlock from './PCNewsBlock';
import PCNewsImageBlock from './PCNewsImageBlock';

const TabPane = Tabs.TabPane;

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
                                <div><img src={require('../images/carousel_1.jpg')} alt="轮播图1"/></div>
                                <div><img src={require('../images/carousel_2.jpg')} alt="轮播图2"/></div>
                                <div><img src={require('../images/carousel_3.jpg')} alt="轮播图3"/></div>
                                <div><img src={require('../images/carousel_4.jpg')} alt="轮播图4"/></div>
                            </Carousel>
                        </div>
                        <PCNewsImageBlock count={6} type="yule" width="400px" cardTitle="娱乐头条" imageWidth="100px"/>
                    </div>

                    <Tabs className="tabs-news">
                        <TabPane tab="头条" key="1">
                            <PCNewsBlock count={20} type="top" width="100%"/>
                        </TabPane>
                        <TabPane tab="社会" key="2">
                            <PCNewsBlock count={20} type="shehui" width="100%"/>
                        </TabPane>
                    </Tabs>

                    <div>
                        <PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内头条" imageWidth="120px"/>
                        <PCNewsImageBlock count={16} type="keji" width="100%" cardTitle="科技头条" imageWidth="120px"/>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    }
}
