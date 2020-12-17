import "./index.scss";
import "./func.js";
import PageHeader from "../../Components/PageHeader/index.js"
import PreviewPhoto from "../../Components/PreviewPhoto/index.js"
import FileList from "../../Components/FileList/index.js"
import React from "react";
import ReactDOM from "react-dom";

class MyDisk extends React.Component {
  render() {
    let previewPhotos = []
    for(let i = 0;i<6;i++){
      previewPhotos.push(<PreviewPhoto></PreviewPhoto>)
    }
    return (
      <div id="MyDisk">
        <PageHeader routeName = "MyDisk"></PageHeader>
        <p className = "tenkoseika">快速访问</p>
        <div className = "previewPhotos">
          {previewPhotos}
        </div>
        <FileList></FileList>
      </div>
    );
  }
}

export default MyDisk;
