import React, { Component } from "react";
import { UserOutlined } from '@ant-design/icons';
import { MENU_INDEX_CONFIG } from "common/constants/menu";
import Menultem from "./Menultem";

import "./style.scss";

interface IProps {}

interface IStates {}

class Header extends Component<IProps, IStates> {
  state = {};

  render() {
    const userName = "上古鹏";
    return (
      <div className="header-component-box">
        <div className="left">
          <div className="logo"></div>
          <div className="menu">
            {MENU_INDEX_CONFIG.map((menuItem, index) => {
              return (
                <Menultem
                  menuItemInfo={menuItem}
                  isActive={menuItem.isActive}
                  key={`index-menu-item${index.toString()}`}
                />
              );
            })}
          </div>
        </div>
        <div className="user-info">
          <UserOutlined />
          <span className="user-name">{userName}</span>
        </div>
      </div>
    );
  }
}
export default Header;
