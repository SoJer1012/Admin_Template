import React from 'react';
import { Card,Icon } from "antd";
import b1 from '../../../images/minren.jpg'
import b2 from '../../../images/zuozu.jpg'
import b3 from '../../../images/xiaoying.jpg'
import b4 from '../../../images/chutian.jpg'


const BottomMiddle = () => (
    <div className="cloud-box">
        <Card>
            <div className="pb-m">
                <h3>消息栏</h3>
            </div>
            <span className="card-tool">
                <Icon type="sync" />
            </span>
            <ul className="list-group no-border">
                <li className="list-group-item">
                    <div className="pull-left w-40 mr-m">
                        <img src={b1} className="img-responsive img-circle" alt="test" />
                    </div>
                    <div className="clear">
                        <span className="block">鸣人</span>
                        <span className="text-muted">终于当上火影了！</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-left w-40 mr-m">
                        <img src={b2} className="img-responsive img-circle" alt="test" />
                    </div>
                    <div className="clear">
                        <span className="block">佐助</span>
                        <span className="text-muted">吊车尾~~</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-left w-40 mr-m">
                        <img src={b3} className="img-responsive img-circle" alt="test" />
                    </div>
                    <div className="clear">
                        <span className="block">小樱</span>
                        <span className="text-muted">佐助，你好帅！</span>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="pull-left w-40 mr-m">
                        <img src={b4} className="img-responsive img-circle" alt="test" />
                    </div>
                    <div className="clear">
                        <span className="block">雏田</span>
                        <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                    </div>
                </li>
            </ul>
        </Card>
    </div>
)

export default BottomMiddle






