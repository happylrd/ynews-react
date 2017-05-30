import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Modal,
    Tabs,
    Form,
    Input,
    Button
} from 'antd';

import logo from '../images/ic_logo.png';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class PCHeader extends Component {

    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogin: false,
            userNickName: '',
            userId: 0
        };
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    }

    handleClick(elem) {
        if (elem.key === 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: elem.key});
        }
    }

    handleSubmit(elem) {

    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const userShowItem = this.state.hasLogin
            ?
            <Menu.Item key="logout" class="register">
                <Button type="primary">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                {/*<Link target="_blank">*/}
                <Button type="dashed">个人中心</Button>
                {/*</Link>*/}
                &nbsp;&nbsp;
                <Button ghost>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" class="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={logo} alt="logo"/>
                            <span>YNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>

                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>

                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>

                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>

                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>

                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>

                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>

                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>

                            {userShowItem}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Modal
                    title="用户中心"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                    okText="关闭"
                >
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldDecorator('r_username')} />
                                </FormItem>
                                <FormItem label="密码">
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')} />
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input type="password"
                                           placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')} />
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </header>
        );
    }
}

// just a necessary wrapper for Form component
export default PCHeader = Form.create({})(PCHeader);
