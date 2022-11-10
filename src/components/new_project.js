import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;

const NewProject = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {

    fetch("http://localhost:9292/api/projects", {
      method:"POST", 
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
  }
  ).then(res=>res.json()).then(data=>console.log(data))

  // onsuccess => dashboard
  };

// make a post request and submit form inputs
    // 1. initialize state
    const [formData, setFormData] = useState({})
    // handle onChange
    function handleOnChange(event){
      const key = event.target.id; 
      
      setFormData({...formData, [key]:event.target.value})

      console.log(formData)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New Project
      </Button>
      <Drawer
        title="Create a new Project"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onSubmit={onFinish} type="primary">
              Cancel
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" onFinish={onFinish} hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Project name',
                  },
                ]}
              >
                <Input  id='name' onChange={handleOnChange} placeholder="Please enter Project name" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="scope"
                label="Which Scope does the project lie? "
                rules={[
                  {
                    required: true,
                    message: 'Please enter Project Scome',
                  },
                ]}
              >
                <Input id='scope' onChange={handleOnChange} placeholder="Please enter Project Scope" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item
                name="creator"
                label="Creator Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Project Creator',
                  },
                ]}
              >
                <Input id='creator' onChange={handleOnChange} placeholder="Please enter Project Creator" />
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
                name="approach"
                label="What's this project approach?"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Project Approach',
                  },
                ]}
              >
                <Input id='approach' onChange={handleOnChange} placeholder="Please enter Project Approach" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
           
            <Col span={24}>
            <Form.Item
                name="timeframe"
                label="What's the project timeframe"
                rules={[
                  {
                    required: true,
                    message: 'Please enter project timeframe',
                  },
                ]}
              >
                <Input id='creator' onChange={handleOnChange} placeholder="Please enter project timeframe" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="desc"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea id='desc' onChange={handleOnChange} rows={4} placeholder="please enter  description" />
              </Form.Item>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" style={{marginRight:20}}>
                  Create Project
                </Button>
        </Form>
      </Drawer>
    </>
  );
};
export default NewProject;