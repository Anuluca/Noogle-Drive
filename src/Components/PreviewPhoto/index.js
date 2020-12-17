import "./index.scss";
import { funcjs } from "./func.js";
import React from "react";
import ReactDOM from "react-dom";

class PreviewPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <div className="PreviewPhoto">
        <div className="show_photo"></div>
        <div className="describe">
          <div className="title_and_pic">
            <div className="pic_logo"></div>
            <div className="title">72839635871648259.jpg</div>
          </div>
          <div className="update_time">您在过去一个月内上传</div>
        </div>
      </div>
    );
  }
}

export default PreviewPhoto;
