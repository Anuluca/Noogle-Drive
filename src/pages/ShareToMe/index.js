import "./index.scss";
import "./func.js";
import PageHeader from "../../Components/PageHeader/index.js"
import React from "react";
import ReactDOM from "react-dom";

class ShareToMe extends React.Component {
  render() {
    return (
      <div id="ShareToMe">
        <PageHeader routeName = "ShareToMe"></PageHeader>
      </div>
    );
  }
}

export default ShareToMe;