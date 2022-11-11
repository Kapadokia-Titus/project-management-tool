import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css'
import Projects from './pages/projects';
import Users from './pages/users';

function App() {


  return (
  <>
    <Users />
    {/* <Projects projects={projectList} handleOnclick={handleOnProjectclick}/> */}
  </>
  );
}

export default App;
