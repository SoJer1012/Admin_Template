import React from 'react';
import {Icon} from "antd";
import './index.less'

export default class Introduce extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)
    };

    render() {
        return (
            <div className="introduce">
                <a
                    href="https://github.com/MuYunyun/react-antd-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon type="github" className="github white" />
                </a>
                <span className="author white">牧之</span>
            </div>
        )
    }
}