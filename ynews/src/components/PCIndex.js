import React, {Component} from 'react';

import PCHeader from './PCHeader';
import PCFooter from './PCFooter';

export default class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <PCFooter/>
            </div>
        );
    }
}
