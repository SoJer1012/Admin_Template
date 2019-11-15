import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Menu, Icon} from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.less'


// const { Sider } = Layout;
const { SubMenu } = Menu;
class NavLeft extends React.Component{

    state = {
        theme: 'dark',
        current: 'home'
    }

    componentWillMount() {
        this.renderMenuNodes = this.renderMenu(MenuConfig)
    }

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    renderMenu = data => {
        let path = this.props.location.pathname.split('/')[1]
        return data.map(item => {
            if(item.children && item.children.length){
                let cItem = item.children.find(cItem => path === cItem.url);
                if(cItem){
                    this.openKey = item.url
                }
                return (
                    <SubMenu
                        key={item.url}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span className="nav-text">{item.name}</span>
                            </span>
                        }
                    >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.url}>
                    <Link to={`/${item.url}`}>
                        <Icon type={item.icon} />
                        <span className="nav-text">{item.name}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }

    render() {
        const selectedKey = this.props.location.pathname.split('/')[1]
        let openKey = this.openKey
        return (
            <div className="navLeft">
                {/*<div className="navLeft-logo" />*/}
                <Menu
                    style={{background: '#404040'}}
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    selectedKeys={[selectedKey]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                >
                    {this.renderMenuNodes}
                </Menu>
            </div>
        )
    }
}

const NavLeftComponent = connect(state => ({
    router: state.router
}))(NavLeft);

export default withRouter(NavLeftComponent)