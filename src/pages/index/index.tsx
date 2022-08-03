import React, { Component } from "react";
import moment from "moment";
interface Props {}
import "./style.scss";
import { Button, DatePicker } from "antd";
import axios from "axios";

export default class IndexPage extends Component<Props> {
  componentDidMount() {
    axios
      .get("/ad/index/gray")
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleDateChange = (data: moment.Moment | null) => {
    console.log(moment(data).unix());
  };
  render() {
    return (
      <div className="index-page">
        <div className="middle-box">
          IndexPage
          <Button type="primary">按钮</Button>
          <DatePicker onChange={this.handleDateChange}></DatePicker>
        </div>
      </div>
    );
  }
}
