import React from 'react';
import { Col, Row } from 'antd';
import TopLeft from './topLeft';
import TopRight from './topRight';
import BottomLeft from './bottomLeft';
import BottomMiddle from './bottomMiddle';
import BottomRight from './bottomRight';
import './index.less';

export default class Home extends React.Component{

    state = {
        statisticState: [
            [
                {name: '收藏', num: 404, class: 'text-danger',icon:'heart'},
                {name: '云数据', num: 2568, class: '', icon: 'cloud'}
            ],
            [
                {name: '照片', num: 778, class: 'text-info', icon:'camera'},
                {name: '邮件', num: 34, class: 'text-success', icon:'mail'}
            ]
        ]
    }
    render() {
        return (
            <div className="dashboard">
                <Row className="statistic">
                    <Col span={8} style={{ overflow: 'hidden' }}>
                        {this.state.statisticState.map((item,index)=>{
                            return (<Row key={index}>
                                {item.map((item,index) =>{
                                    return (
                                        <Col span={12} style={{ overflow: 'hidden' }} key={index}>
                                            <TopLeft state={item} />
                                        </Col>
                                    )
                                })}
                            </Row>)
                        })}
                    </Col>
                    <Col span={16} style={{ overflow: 'hidden' }}>
                        <TopRight />
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <BottomLeft />
                    </Col>
                    <Col span={8}>
                        <BottomMiddle />
                    </Col>
                    <Col span={8}>
                        <BottomRight />
                    </Col>
                </Row>
            </div>
        )
    }
}