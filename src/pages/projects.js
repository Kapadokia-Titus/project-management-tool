import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row } from 'antd';
import NewProject from '../components/new_project';
import ViewProject from '../components/view_project';

const Projects = ({projects, handleOnclick}) => (

    
  <div className="site-card-wrapper">
    <NewProject />
    <div>
        <h2> Current Projects</h2>
    </div>
    <Row gutter={16} mt={4}>
        
        {projects?.map(project=>
            <Col span={8}>
                <Card title={project.name} onClick={handleOnclick} bordered={false}>
                {project.desc}
               
                </Card>
                <ViewProject projectDetail={project}/>
            </Col>
        )}
      
      
    </Row>
  </div>
);
export default Projects;