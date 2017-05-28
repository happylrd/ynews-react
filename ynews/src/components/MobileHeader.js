import React, {Component} from 'react';

import logo from '../images/ic_logo.png';

export default class MobileHeader extends Component {

    render() {
        return (
            <div id="mobile-header">
                <header>
                    <a href="/">
                        <img src={logo} alt="logo"/>
                        <span>YNews</span>
                    </a>
                </header>
            </div>
        );
    }
}
