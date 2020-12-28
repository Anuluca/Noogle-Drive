import "./index.scss";
import "./func.js";
import PageHeader from "../../Components/PageHeader/index.js"
import React from "react";
import ReactDOM from "react-dom";

class StorageSpace extends React.Component {
  render() {
    return (
      <div id="StorageSpace">
        <PageHeader routeName = "StorageSpace"></PageHeader>
      </div>
    );
  }
}

export default StorageSpace;
