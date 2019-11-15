import React from 'react'
import { Layout } from 'antd'
import NavLeft from './components/navLeft'
import Top from './components/Top'
// import Footer from './components/footer'
import Introduce from "./pages/introduce";
import './App.css'

const { Content,Sider,Header } = Layout;

export default class Admin extends React.Component{

    state = {
        collapsed: false,
        theme: 'dark',
        mode: 'inline'
    };

    toggle = () => {
        const { collapsed } = this.state
        this.setState({
            collapsed: !collapsed,
            mode: collapsed ? 'inline' : 'vertical'
        });
    };

    render() {
        return (
            <Layout className="container-box">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="container-box-left">
                    <Introduce />
                    <NavLeft />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: '0 30px', height: '58px' }}>
                        <Top collapsed={this.state.collapsed} toggle={this.toggle} />
                    </Header>
                    <Content className="mainBody"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            overflowY: 'auto'
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}