import React, {Component} from 'react';
import {Tabs} from 'antd';

import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends Component {

    render() {
        return (
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        头条
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        社会
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        国内
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        国际
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        娱乐
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    }
}
