import React,{useState, useEffect} from "react";
import Projects from "./projects";
import LoginUsers from "./users/Login";
import RegisterUsers from "./users/Register";

export default function Users(){

    // get status
    const [isLoggedIn, setIsLoggedIn] = useState(false) 
    const [authUi, setAuthUi]= useState("login")


    // project ui
    const[projectList, setProjectList] = useState([])

    function handleOnProjectclick(event){
        console.log("Card Is Clicked")
    }

    useEffect(()=>{

        fetch("http://localhost:9292/api/projects")
        .then(res =>res.json())
        .then(data=>setProjectList(data))

    },[])




    const onFinish = (values) => {

        fetch("http://localhost:9292/api/users", {
          method:"POST", 
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(values)
      }
      ).then(res=>res.json()).then(data=>setAuthUi("loggedIn")).catch(e =>console.log(e))
  
      // onsuccess => dashboard
      setAuthUi("loggedIn")
      console.log(authUi)
      };

    // fuunction to handle switch between login/register
    function handleSwitch(event){
        event.preventDefault()
        const key = event.target.id 
        setAuthUi(key)
    }

    let ui; 
    if  (authUi==="login"){
       ui = <LoginUsers handleSwitch={handleSwitch} />
    }else if(authUi=="loggedIn"){
        ui = <Projects projects={projectList} handleOnclick={handleOnProjectclick}/>
    }
    else{
        ui = <RegisterUsers handleSwitch={handleSwitch} onFinish={onFinish}/>
    }

    




    return(
        <div>
            {ui}
        </div>
    )

}