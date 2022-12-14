import React, { Component } from "react";
import { MenuItemInfoType } from "./types";
interface IProps {
  isActive?: boolean;
  onClick?: (url: string) => void;
  menuItemInfo: MenuItemInfoType;
}

export default class Menultem extends Component<IProps> {
  handleMenuClick(url: string) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(url);
    }
  }
  render() {
    const { menuItemInfo, isActive } = this.props;
    return (
      <div className="index-menuItem-component-box">
        <div
          className="menu-item-title"
          onClick={() => {
            this.handleMenuClick(menuItemInfo.url);
          }}
        >
          {menuItemInfo.name}
          {menuItemInfo.menuChildren.length > 0 && (
            <span className="arrow-icon"></span>
          )}
        </div>
        <div className={isActive ? "bottom-line-active" : "bottom-line"}></div>
        {menuItemInfo.menuChildren.length > 0 && (
          <div className="menu-children-box">
            {menuItemInfo.menuChildren.map((menuChild, index) => (
              <div className="menu-child" key={`menu-child${index.toString()}`}>
                <span
                  onClick={() => {
                    this.handleMenuClick(menuChild.url);
                  }}
                >
                  {menuChild.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
