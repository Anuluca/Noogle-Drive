import "./index.scss";
import { funcjs } from "./func.js";
import FileLi from "./FileLi/index.js"
import React from "react";
import ReactDOM from "react-dom";

class FileList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let li_list = [];
    for(let i = 0;i<3;i++){
      li_list.push(<FileLi></FileLi>)
    }
    return (
      <div id="FileList">
        <div className="file_header">
          <div className="name">
            <span>名称</span>
            <div></div>
          </div>
          <div className="owner">所有者</div>
          <div className="update_time">上次修改日期</div>
          <div className="size">文件大小</div>
        </div>
        {li_list}
        
      </div>
    );
  }
}

export default FileList;
