import React, {Component} from 'react';
import {
    Icon,
    Modal,
    Tabs,
    Form,
    Input,
    Button,
    message
} from 'antd';

import logo from '../images/ic_logo.png';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class MobileHeader extends Component {

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

    handleSubmit(elem) {
        elem.preventDefault();

        const formData = this.props.form.getFieldsValue();
        console.log(formData);

        const myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=' +
            formData.r_username + '&r_password=' + formData.r_password + '&r_confirmPassword=' +
            formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userId: json.UserId});
                message.success("请求成功！");
            });

        this.setModalVisible(false);
    }

    doRegister() {
        this.setModalVisible(true);
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        const userShowItem = this.state.hasLogin
            ?
            <Icon type="inbox"/>
            :
            <Icon type="setting" onClick={this.doRegister.bind(this)}/>;

        return (
            <div id="mobile-header">
                <header>
                    <a href="/">
                        <img src={logo} alt="logo"/>
                        <span>YNews</span>
                    </a>

                    {userShowItem}
                </header>

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
                                    {getFieldDecorator('r_username', {
                                        rules: [{required: true, message: '请输入您的用户名'}],
                                    })(
                                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password', {
                                        rules: [{required: true, message: '请输入您的密码'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                               placeholder="密码"/>
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword', {
                                        rules: [{required: true, message: '请确认您的密码'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                               placeholder="确认密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

// just a necessary wrapper for Form component
export default MobileHeader = Form.create({})(MobileHeader);
