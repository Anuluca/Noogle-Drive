import "./index.scss";
import { funcjs } from "./func.js";
import React from "react";
import ReactDOM from "react-dom";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentWillMount() {
    switch (this.props.routeName) {
      case "MyDisk":
        this.setState({
          title: "我的云端软盘",
        });
        break;
      case "ShareToMe":
        this.setState({
          title: "与我共享",
        });
        break;
      case "UsedRecently":
        this.setState({
          title: "最近用过",
        });
        break;
      case "Starred":
        this.setState({
          title: "已加星标",
        });
        break;
      case "Recycle":
        this.setState({
          title: "回收站",
        });
        break;
      case "StorageSpace":
        this.setState({
          title: "存储空间",
        });
        break;
    }
  }

  render() {
    return (
      <div id="PageHeader">
        <div className="title_dropdown">
          <div className="title">{this.state.title}</div>
          <svg
            class="polygon"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            focusable="false"
            fill="#000000"
          >
            <polygon points="5,8 10,13 15,8"></polygon>
          </svg>
        </div>
        <div className="right_buttons">
          <div className="viewType circle"></div>
          <div className="info circle"></div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
