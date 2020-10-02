import React from 'react';
import { Menu } from 'antd';

const Menubar = () => {

    const centerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "rgba( 255, 255, 255, 0.1 )",
        borderBottom : "1px",
    }


    return (
        <>  
            <Menu mode="horizontal" style={centerStyle}>
                <Menu.Item>Update</Menu.Item>
                <Menu.Item>Topic</Menu.Item>
                <Menu.Item>Chronicle</Menu.Item>
            </Menu>

        </>


    );


}

export default Menubar;