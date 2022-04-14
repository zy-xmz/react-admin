import React from 'react';
import { Link, Outlet } from "react-router-dom";

// 引入layout的样式
import '../../static/css/layout.scss';
// 引入路由表
import { routes } from '../../router'
// 引入antd组件
import { Layout, Menu } from 'antd';
// 引入收起展开的图标
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class LayoutBox extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="layout-box">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" style={{height: 60}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {
              routes.map((item, index) => 
                <Menu.Item key={index} icon={item.icon}>
                  <Link to={'/' + item.path}>{item.title}</Link>
                </Menu.Item>
              )
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 16px' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: { fontSize: 20 },
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="layout-content"
            style={{
              margin: '16px',
              padding: 24,
              height: 'calc(100vh - 96px)'
            }}
          >
            {/* Outlet 路由内容占位 */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutBox