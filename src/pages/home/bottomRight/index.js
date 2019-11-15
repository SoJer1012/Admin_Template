import React from 'react';
import { Card,Icon } from 'antd';
import EchartsViews from './echartsViews'

const BottomRight = () => (
    <div className="cloud-box">
        <Card>
            <div className="pb-m">
                <h3>访问量统计</h3>
                <small>最近7天用户访问量</small>
            </div>
            <span className="card-tool">
                <Icon type="sync" />
            </span>
            <EchartsViews />
        </Card>
    </div>
)

export default BottomRight