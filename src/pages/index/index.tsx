import React, { Component } from "react";
interface Props {}
import {Button} from 'antd';

export default class IndexPage extends Component<Props> {
  render() {
    return <div>IndexPage
      <Button type="primary">按钮</Button>
    </div>;
  }
}
