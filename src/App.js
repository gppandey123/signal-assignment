import React, {useState} from 'react';
import Form from './component/form';
import Table from './component/table';

const App = () => {
  const [tableData, settableData] = useState([{name: "Gyan", location: "Chandigarh"}]);
  return (
    <>
    <Form settableData={settableData} tableData={tableData}/>
    <Table tableData={tableData} settableData={settableData}/>
    </>
  )
}

export default App