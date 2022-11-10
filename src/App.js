import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css'
import Projects from './pages/projects';
import Users from './pages/users';

function App() {

  const[projectList, setProjectList] = useState([])

  function handleOnProjectclick(event){
      console.log("Card Is Clicked")
  }

  useEffect(()=>{

    fetch("http://localhost:9292/api/projects")
    .then(res =>res.json())
    .then(data=>setProjectList(data))

  },[])

  console.log(projectList)
  return (
  <>
    <Users />
    {/* <Projects projects={projectList} handleOnclick={handleOnProjectclick}/> */}
  </>
  );
}

export default App;
