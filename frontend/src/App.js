import React from 'react';
import { GetMem } from './GetMem';
import { NodeCheck } from './NodeCheck';
import { SayService } from './SayService';
const App = () => {
  return <div>
  <h1>Memory Infomation</h1>
  <GetMem />
  <h1>Node Check Status</h1>
  <NodeCheck />
  <h1>Say Service</h1>
  <SayService />
  </div>;
};

export default App;