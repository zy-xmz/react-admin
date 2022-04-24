import React from 'react';
import { Link, Outlet } from "react-router-dom";

// 引入layout的样式
import '../../static/css/layout.scss';
// 引入路由表
import { routes } from '../../router'
// 引入antd组件
import { Layout, Menu, Drawer, Form, Input, Button } from 'antd';
// 引入收起展开的图标
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import IconFont from '../../components/IconFont'

const { Header, Sider, Content } = Layout;

class LayoutBox extends React.Component {
  state = {
    collapsed: false,
    drawerVisible: false
  }
  // 切换左边menu的折叠和展开
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  // 显示右边抽屉
  showDrawer = () => {
    this.setState({
      drawerVisible: true,
    })
  }
  // 关闭右边抽屉
  onClose = () => {
    this.setState({
      drawerVisible: false,
    })
  }

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
          <Header>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: { fontSize: 20 },
              onClick: this.toggle,
            })}
            <div className="right">
              <img style={{ width: '60px', marginRight: 20 }} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F15%2Fji%2Ful.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652995142&t=e1fd76b3a27230873c3090ee66eff853" alt="" />
              <IconFont onClick={this.showDrawer} type="icon-caidan07" style={{ fontSize: 34, color: '#999' }}></IconFont>
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
          {/* 右边抽屉 */}
          <Drawer
            title="关于我"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.drawerVisible}
          >
            <div className="personal">
              <div className="up">
                <div className="portrait">
                  <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F62%2Fbe%2F76%2F62be7611945c3888928bbd9849617424.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653425642&t=97bf757d37aeca9b2ed02e1980df3cbf" alt="" />
                </div>
                <h3>某月某日</h3>
              </div>
              <Form name="basic" autoComplete="off">
                <Form.Item label="昵称" name="nickName">
                  <Input />
                </Form.Item>
                <Form.Item label="性别" name="gender">
                  <Input />
                </Form.Item>
                <Form.Item label="年龄" name="age">
                  <Input />
                </Form.Item>
                <Form.Item label="职业" name="job">
                  <Input />
                </Form.Item>
                <Form.Item label="爱好" name="hobby">
                  <Input />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 11,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    保存
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Drawer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutBox