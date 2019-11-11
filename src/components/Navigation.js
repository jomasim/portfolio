import React from 'react';
import {Menu} from "semantic-ui-react";

const navigation = () => (
    <Menu pointing secondary className="menu-container">
        <Menu.Item
            name='Profile'
            active
            className="header-item"
        />
        <Menu.Item
            name='Tools'
            className="header-item"
        />
        <Menu.Item
            name='UI/UX'
            className="header-item"
        />
        <Menu.Item
            name='Experience'
            className="header-item"
        />
        <Menu.Item
            name='Contact'
            className="header-item"
        />
    </Menu>);
export default navigation;