// 引入antd表单组件
import { Form, Input, Button, Checkbox } from 'antd';
// 引入antd图标
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// 引入login样式
import '../../static/css/login.css';

export default function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div class="login-box">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h2>Believe yourself</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form>
    </div>
  )
}