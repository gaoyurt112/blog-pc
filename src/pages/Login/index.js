import './index.scss'
//引入antd组件
import { Button, Checkbox, Form, Input } from 'antd'

function Login () {
  return (
    <div className="container">
      <div className="login-container">
        <div className='login-container-l'>
          <div className='title'>
            <h2>Blog</h2>
          </div>
        </div>
        <div className='login-container-r'>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
              <Checkbox>已阅读相关细则<a href="#">《请阅读开发者手册》</a></Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login