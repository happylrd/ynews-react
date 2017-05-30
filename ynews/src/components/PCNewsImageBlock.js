import React, {Component} from 'react';
import {Card} from 'antd';

export default class PCNewsImageBlock extends Component {

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

        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type +
            "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };

        const {news} = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <div key={index} className="image-block">
                    <div className="custom-image">
                        <img alt="新闻相关图片" src={newsItem.thumbnail_pic_s} style={styleImage}/>
                    </div>
                    <div className="custom-card">
                        <h3 style={styleH3}>{newsItem.title}</h3>
                        <p>{newsItem.author_name}</p>
                    </div>
                </div>
            ))
            :
            '没有加载到任何数据';

        return (
            <div className="top-news-list">
                <Card title={this.props.cardTitle} bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        );
    }
}
