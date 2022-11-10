import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
  } from 'antd';
  import React, { useState, useEffect } from 'react';
import SecondContainer from './second';
  const { Option } = Select;
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };




  const RegisterUsers = ({handleSwitch, onFinish}) => {


    const [form] = Form.useForm();
    

    // make a post request and submit form inputs
    // 1. initialize state
    const [formData, setFormData] = useState({
            username:"",
            email:"",
            phone_number:"",
            gender:"",
            age:0
    })

    function handleFormSubmit(event){
        event.preventDefault(); 
       
         // send the data to admin
        
         

       
    }

    // handle onChange
    function handleOnChange(event){
        const key = event.target.id; 
        
        setFormData({...formData, [key]:event.target.value})


    }

    
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
    const suffixSelector = (
      <Form.Item name="suffix" noStyle>
        <Select
          style={{
            width: 70,
          }}
        >
          <Option value="USD">$</Option>
          <Option value="CNY">¥</Option>
        </Select>
      </Form.Item>
    );
    
    return (

        <SecondContainer>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                onSubmit={handleFormSubmit}
                scrollToFirstError
            >
        {/* username */}
                <Form.Item
                        name="username"
                        label="Username"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Username!',
                            whitespace: true,
                            },
                        ]}>
                <Input id="username" onChange={handleOnChange}/>
                </Form.Item>
        
        {/* email */}

                <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                    },
                    {
                    required: true,
                    message: 'Please input your E-mail!',
                    },
                ]}
                >
                <Input id='email' onChange={handleOnChange}/>
                </Form.Item>
        
        {/* Password & Confirm Password */}
                <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                hasFeedback
                >
                <Input.Password  id='password' onChange={handleOnChange}/>
                </Form.Item>
        
                <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                    required: true,
                    message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                    }),
                ]}
                >
                <Input.Password id='confpassword' onChange={handleOnChange}/>
                </Form.Item>
        
            
            {/*phone number  */}
        
                <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                    required: true,
                    message: 'Please input your phone number!',
                    },
                ]}
                >
                <Input id='phone_number' onChange={handleOnChange}
                    addonBefore={prefixSelector}
                    style={{
                    width: '100%',
                    }}
                />
                </Form.Item>
        
            {/* gender */}
            <Form.Item
                    name="gender"
                    label="Gender"
                    tooltip="Enter your Gender"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your Gender!',
                    whitespace: true,
                    },
                ]}>
                <Input id='gender' onChange={handleOnChange} />
                </Form.Item>
        {/* age */}
                <Form.Item
                    name="age"
                    label="Age"
                    tooltip="Enter your age"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your Age!',
                    whitespace: true,
                    },
                ]}>
                <Input id='age' onChange={handleOnChange} />
                </Form.Item>

                {/* Agreement */}
                <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
                >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{marginRight:20}}>
                    Register
                </Button>
                Or <a href="" id='login' onClick={handleSwitch}>Login!</a>
                </Form.Item>
            </Form>

        </SecondContainer>
        
      
    );
  };
  export default RegisterUsers;