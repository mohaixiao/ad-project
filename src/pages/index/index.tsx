import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import { Select, Button, DatePicker } from "antd";

import Header from "@components/Header";
import Footer from "@components/Footer";
import DataTrend from "@components/DataTrend";
import Account from "./components/Account";
import PromotionCard from "./components/PromotionCard";
import ProductCard from "./components/ProductCard";
import IndexBanner from "./components/IndexBanner";
import ProductNews from "./components/ProductNews";

import "./style.scss";

const { Option } = Select;

interface Props extends RouteComponentProps {}

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
    const { history } = this.props;
    return (
      <div className="index-page">
        <div className="head-box">
          <Header history={history}/>
        </div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">
              <div className="header-box">
                <div className="title">数据趋势</div>
                <div className="select-area">
                  <Select
                    defaultValue="0"
                    style={{ width: 120 }}
                    // onChange={this.handlePromotionChange}
                    size="small"
                  >
                    <Option value="0">全部推广产品</Option>
                    <Option value="1">搜索推广</Option>
                    <Option value="2">一站式推广</Option>
                    <Option value="3">合约推广</Option>
                    <Option value="4">知识营销</Option>
                  </Select>
                  <DatePicker
                    // onChange={this.handalDateChange}
                    size="small"
                    style={{ marginLeft: 10 }}
                    placeholder="请选择日期"
                  />
                </div>
              </div>
              <DataTrend />
            </div>
            <div className="promotion-area">
              <PromotionCard history={history} />
            </div>
            <div className="product-card-area">
              <ProductCard />
            </div>
          </div>
          <div className="right-content">
            <div className="account-area">
              <Account />
            </div>
            <div className="index-banner-area">
              <IndexBanner />
            </div>
            <div className="product-news-area">
              <ProductNews />
            </div>
            <div className="right-footer-area">
              <div className="title">品牌推广</div>
              <div className="btns">
                <div className="label">热门产品：</div>
                <Button size="small" style={{ marginRight: 10 }}>
                  品牌专区
                </Button>
                <Button size="small">巨屏广告</Button>
              </div>
            </div>
            <div className="right-bottom-img">
              <img src="assets/imgs/right-bg.png" alt="" />
            </div>
          </div>
        </div>
        <div className="foot-box">
          <Footer />
        </div>
      </div>
    );
  }
}
