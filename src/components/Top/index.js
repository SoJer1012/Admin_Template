import React from 'react'
import { Icon,Menu } from 'antd'
import * as screenfull from 'screenfull'
import { Link } from "react-router-dom";
import './index.less'

const { SubMenu } = Menu;
export default class Top extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'SoJer'
        })
    }

    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request()
        }
    }

    render(){
        return (
            <div className="top">
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut">
                    <SubMenu
                        title={
                            <span>
                                <Icon type="user" />
                                {this.state.username}
                          </span>
                        }
                    >
                        <Menu.Item key="logOut">
                            <Link to="/login">退出</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <Icon className="screenFull" type="arrows-alt" onClick={this.screenFull} />
            </div>
        )
    }
}
