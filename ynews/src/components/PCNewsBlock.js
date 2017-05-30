import React, {Component} from 'react';
import {
    Card
} from 'antd';

export default class PCNewsBlock extends Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        const myFetchOptions = {
            method: 'GET'
        };

        console.log('type: ' + this.props.type);
        console.log('count: ' + this.props.count);

        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type +
            "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const {news} = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <li key={index}>
                    {newsItem.title}
                </li>
            ))
            :
            '没有加载到任何数据';

        return (
            <div className="top-news-list">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    }
}
