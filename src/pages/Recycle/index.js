import "./index.scss";
import "./func.js";
import PageHeader from "../../Components/PageHeader/index.js"
import React from "react";
import ReactDOM from "react-dom";

class Recycle extends React.Component {
  render() {
    return (
      <div id="Recycle">
        <PageHeader routeName = "Recycle"></PageHeader>
      </div>
    );
  }
}

export default Recycle;
