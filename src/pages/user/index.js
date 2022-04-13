// 引入antd组件
import { Space, Table, Radio, Divider, Input, Button } from 'antd';
// 引入antd图标
import { SearchOutlined } from '@ant-design/icons';

// 表格列
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <h3>{text}</h3>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
// 表格数据
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }
];

export default function User () {
  return (
    <div>
      {/* 搜索栏 */}
      <Space size="middle">
        <Input placeholder="请输入姓名" style={{width: 220}} allowClear enterButton="Search"/>
        <Button type="primary" icon={<SearchOutlined />} style={{height: 32}}>搜索</Button>
      </Space>
      {/* 表格 */}
      <Table
        style={{marginTop: 20}}
        rowSelection={{
          type: 'checkbox'
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}