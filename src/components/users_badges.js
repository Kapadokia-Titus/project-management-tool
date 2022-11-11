import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import React,{useEffect, useState} from 'react';






export function UsersBadge () {

    const [users, setUsers]  = useState([])
    // fetch users
    useEffect(()=>{
        fetch(`http://localhost:9292/api/users`)
        .then(res=>res.json())
        .then(data =>setUsers(data))
    },[])

const max = 4;
 return(
    <>

<Avatar.Group stack>
    {users
        .filter((user, i) => i < max)
        .map(user => (
            <Tooltip title={user.username} placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>
        ))}
    <Avatar circle style={{ background: '#111' }}>
        +{users.length - max}
    </Avatar>
    </Avatar.Group>
    </>
 )
  
}