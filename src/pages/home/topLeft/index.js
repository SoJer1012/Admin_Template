import React from 'react';
import { Card, Icon } from "antd";
import './index.less';

class TopLeft extends React.Component {
    render(){
        const style = this.props.state.class? this.props.state.class : '';
        return (
            <div className="cloud-box">
                <Card>
                    <div className="clear y-center">
                        <div className="pull-left mr-m">
                            <Icon type={this.props.state.icon} className={`text-2x ${style}`}/>
                        </div>
                        <div className="clear">
                            <div className="text-muted">{this.props.state.name}</div>
                            <h2>{this.props.state.num}</h2>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default TopLeft
