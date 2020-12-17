import "./index.scss";
import "./func.js";
import PageHeader from "../../Components/PageHeader/index.js"
import React from "react";
import ReactDOM from "react-dom";

class UsedRecently extends React.Component {
  render() {
    return (
      <div id="UsedRecently">
        <PageHeader routeName = "UsedRecently"></PageHeader>
      </div>
    );
  }
}

export default UsedRecently;
