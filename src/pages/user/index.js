import { Table, Radio, Divider } from 'antd';
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
      <Table
        rowSelection={{
          type: 'checkbox'
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}