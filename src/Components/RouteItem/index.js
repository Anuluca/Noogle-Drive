import "./index.scss";
import { funcjs } from "./func.js";
import React from "react";
import ReactDOM from "react-dom";

class RouteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      logoClasses: "",
      arrowClasses: "",
      backClasses: "",
      ifChosen: "",
    };
  }

  componentWillMount() {
    switch (this.props.routeName) {
      case "MyDisk":
        this.setState({
          title: "我的云端软盘",
          logoClasses: "mydrive_logo logo",
        });
        if (this.props.ifChosen == "Chosen") {
          this.setState({
            arrowClasses: "arrow",
            backClasses: "RouteItem backChose",
          });
        } else {
          this.setState({
            arrowClasses: "arrow visnone",
            backClasses: "RouteItem",
          });
        }
        break;
      case "ShareToMe":
        this.setState({
          title: "与我共享",
          logoClasses: "sharetome_logo logo",
        });
        if (this.props.ifChosen == "Chosen") {
          this.setState({
            arrowClasses: "arrow",
            backClasses: "RouteItem backChose",
          });
        } else {
          this.setState({
            arrowClasses: "arrow visnone",
            backClasses: "RouteItem",
          });
        }
        break;
      case "UsedRecently":
        this.setState({
          title: "最近用过",
          logoClasses: "usedrecently_logo logo",
        });
        if (this.props.ifChosen == "Chosen") {
          this.setState({
            arrowClasses: "arrow",
            backClasses: "RouteItem backChose",
          });
        } else {
          this.setState({
            arrowClasses: "arrow visnone",
            backClasses: "RouteItem",
          });
        }
        break;
      case "Starred":
        this.setState({
          title: "已加星标",
          logoClasses: "starred_logo logo",
        });
        if (this.props.ifChosen == "Chosen") {
          this.setState({
            arrowClasses: "arrow",
            backClasses: "RouteItem backChose",
          });
        } else {
          this.setState({
            arrowClasses: "arrow visnone",
            backClasses: "RouteItem",
          });
        }
        break;
      case "Recycle":
        this.setState({
          title: "回收站",
          logoClasses: "recycle_logo logo",
        });
        if (this.props.ifChosen == true) {
          this.setState({
            arrowClasses: "arrow",
            backClasses: "RouteItem backChose",
          });
        } else {
          this.setState({
            arrowClasses: "arrow visnone",
            backClasses: "RouteItem",
          });
        }
        break;
    }
  }

  render() {
    return (
      <div className={this.state.backClasses}>
        <div className={this.state.arrowClasses}>
          <svg
            class="a-s-fa-Ha-pa"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            focusable="false"
            fill="#000000"
          >
            <polygon points="8,5 13,10 8,15"></polygon>
          </svg>
        </div>
        <div className={this.state.logoClasses}></div>
        <span>{this.state.title}</span>
      </div>
    );
  }
}

export default RouteItem;
