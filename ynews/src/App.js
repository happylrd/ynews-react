import React, {Component} from 'react';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

import PCIndex from './components/PCIndex';
import MobileIndex from './components/MobileIndex';

class App extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
