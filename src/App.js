import './App.css';
import Split from 'react-split'
import React, { useState, useEffect } from "react";
import First from './components/first'
import Second from './components/second'
import Third from './components/third'
import Axios from 'axios';
function App() {

  const [data, setdata] = useState(
    {
      '1': { text: 'Sample', component: '1', id: '' },
      '2': { text: 'Sample', component: '2', id: '' },
      '3': { text: 'Sample', component: '3', id: '' }

    });

  const addData = (component, text) => {
    Axios.post("http://localhost:3001/addData", { text, component }).then((res) => {
      const newState = { ...data, [component]: { id: res.data._id, text: res.data.text, component } }
      setdata(newState);
    });
  }
  const updateData = (component, text, id) => {
    Axios.post("http://localhost:3001/updateData", { id, text, component }).then((res) => {
      setdata({ ...data, [component]: { id: id, text: res.data.text, component } });
    });
  }

  return (
    <div className="App">
      <Split direction='vertical' style={{ height: 'calc(100vh-4rem)' }}>
        <Split className="wrap" sizes={[40, 60]}>
          <First data={data['1'].text} onAdd={addData} onUpdate={updateData} id={data['1'].id} />
          <Second data={data['2'].text} onAdd={addData} onUpdate={updateData} id={data['2'].id} />
        </Split>
        <Third data={data['3'].text} onAdd={addData} onUpdate={updateData} id={data['3'].id} />
      </Split>
    </div>
  );
}

export default App;
