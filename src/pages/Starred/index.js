import "./index.scss";
import "./func.js";
import PageHeader from "../../Components/PageHeader/index.js"
import React from "react";
import ReactDOM from "react-dom";

class Starred extends React.Component {
  render() {
    return (
      <div id="Starred">
        <PageHeader routeName = "Starred"></PageHeader>
      </div>
    );
  }
}

export default Starred;
