import React, { Component } from "react";
interface Props {}
import "./style.scss";
import { Button } from "antd";
import axios from "axios";

export default class IndexPage extends Component<Props> {
  componentDidMount() {
    axios
      .get('/ad/index/gray')
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="index-page">
        <div className="middle-box">
          IndexPage
          <Button type="primary">按钮</Button>
        </div>
      </div>
    );
  }
}
