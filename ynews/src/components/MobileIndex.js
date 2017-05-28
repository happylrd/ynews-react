import React, {Component} from 'react';

import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';

export default class MobileIndex extends Component {

    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        );
    }
}
