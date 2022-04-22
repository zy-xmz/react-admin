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
import IconFont from '../../components/IconFont'

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
          <Header className="site-layout-background">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: { fontSize: 20 },
              onClick: this.toggle,
            })}
            <div>
              <img style={{ width: '60px' }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F15%2Fji%2Ful.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652995142&t=e1fd76b3a27230873c3090ee66eff853" alt="" />
              <IconFont type="icon-caidan07" style={{ fontSize: 30, color: 'red' }}></IconFont>
            </div>
          </Header>
          <Content
            className="layout-content"
            style={{
              margin: '15px',
              padding: 15,
              height: 'calc(100vh - 86px)'
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