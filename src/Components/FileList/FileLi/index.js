import "./index.scss";
import { funcjs } from "./func.js";
import React from "react";
import ReactDOM from "react-dom";

class FileLi extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="FileLi">
          <div className="li_name"><div></div>旧照片</div>
          <div className="owner">我</div>
          <div className="update_time">2020年12月17日 我</div>
          <div className="size">-</div>
        </div>
    );
  }
}

export default FileLi;
