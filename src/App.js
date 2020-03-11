import React from 'react';
import { Table } from 'antd'
import { hot } from 'react-hot-loader/root'

function App () {
  console.log('npm start 之后注释我然后保存，触发 hot reload')
  return (
    <Table />
  )
}

export default hot(App);
