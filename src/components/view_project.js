import { Button, Drawer,Avatar, Comment, Tooltip, Tag, Divider, Timeline, Checkbox} from 'antd';
import React, { useState , useEffect} from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const ViewProject = ({projectDetail}) => {

    // Start Handle Drawer
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
 // End Handle Drawer
    
//  Start Handle Deliverables
    const [deliverables, setDeliverables] = useState([])
    // fetch deliverables by project
    useEffect(()=>{
        fetch(`http://localhost:9292/api/projects/${projectDetail.id}/deliverables`)
        .then(res=>res.json())
        .then(data =>setDeliverables(data))
    },[])
//  End Handle Deliverables


// Deliverables checkbox
    const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  


//   Start Handling status
  let statusTag; 

    if (projectDetail.status==="on progress") {
       statusTag = <Tag color="processing">{projectDetail.status}</Tag>
    } else if(projectDetail.status==="complete") {
        statusTag = <Tag color="success">{projectDetail.status}</Tag>
    }
    else if(projectDetail.status==="overdue") {
        statusTag =  <Tag color="error">{projectDetail.status}</Tag>
    }else{
        statusTag = <Tag color="grey">{projectDetail.status}</Tag>
    }
//   End Handling status

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        View Project
      </Button>
      <Drawer title="Project" width={520} closable={false} onClose={onClose} open={open}>

        {/* the main project description area */}
            <Comment
                author={<a>{projectDetail.name}</a>}
                avatar={ <Avatar
                    size="large"
                >
                    {projectDetail.name.charAt(0).toUpperCase()}
                </Avatar>}
                content={
                    <p>
                {projectDetail.desc}
                    </p>
                }
                datetime={
                    <Tooltip title={projectDetail.created_at}>
                    <span>{projectDetail.created_at}</span>
                    </Tooltip>
                }
            />
            {/* Start of status section  */}
            <Divider orientation="left">Project Status</Divider>
                <div>
                    {statusTag}
                </div>
            {/* End of status section  */}

            {/* Start of Timeline Tracking section */}
            <Divider orientation="left">Track Progress and timelines</Divider>
            <div style={{ marginTop:35 }}>
            <Timeline>
            {deliverables?.map((deliverable)=>
                  <Timeline.Item color={deliverable.status===true? "green":"grey"}>{deliverable.name}</Timeline.Item>
            )}
            </Timeline>
            </div>
            {/* End of Timeline Tracking section */}
        <Button type="primary" onClick={showChildrenDrawer}>
          View Deliverables
        </Button>
        <Drawer
          title="Deliverable"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
         {deliverables?.map((deliverable)=>
                <>
                <Checkbox onChange={onChange}>{deliverable.name}</Checkbox><br/>
                </>
            )}
        </Drawer>
      </Drawer>
    </>
  );
};
export default ViewProject;