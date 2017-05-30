import React, {Component} from 'react';

import PCHeader from './PCHeader';
import PCFooter from './PCFooter';
import PCNewsContainer from './PCNewsContainer';

export default class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <PCNewsContainer/>
                <PCFooter/>
            </div>
        );
    }
}
