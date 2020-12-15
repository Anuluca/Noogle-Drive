import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import MyDisk from "./pages/MyDisk/index.js";
import ShareToMe from "./pages/ShareToMe/index.js";
import UsedRecently from "./pages/UsedRecently/index.js";
import Starred from "./pages/Starred/index.js";
import Recycle from "./pages/Recycle/index.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Router>
          <div className="app_header">
            <div className="app_logo"></div>
            <div className="search_bar"></div>
            <div className="right_bar"></div>
          </div>
          <div className="app_body">
            <div className="left_bar">
              <div className="add_new"></div>
              <div className="router">
                <Link to="/MyDisk">
                  <div className="route">我的云端软盘</div>
                </Link>
                <Link to="/ShareToMe">
                  <div className="route">与我共享</div>
                </Link>
                <Link to="/UsedRecently">
                  <div className="route">最近用过</div>
                </Link>
                <Link to="/Starred">
                  <div className="route">已加星标</div>
                </Link>
                <Link to="/Recycle">
                  <div className="route">回收站</div>
                </Link>
              </div>
            </div>
            <div className="pageView">
              <Route path="/MyDisk" component={MyDisk}></Route>
              <Route path="/ShareToMe" component={ShareToMe}></Route>
              <Route
                path="/UsedRecently" component={UsedRecently}
              ></Route>
              <Route path="/Starred" component={Starred}></Route>
              <Route path="/Recycle" component={Recycle}></Route>
            </div>
            <div className="right_bar"></div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
