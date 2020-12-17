import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import MyDisk from "./pages/MyDisk/index.js";
import ShareToMe from "./pages/ShareToMe/index.js";
import UsedRecently from "./pages/UsedRecently/index.js";
import Starred from "./pages/Starred/index.js";
import Recycle from "./pages/Recycle/index.js";
import RouteItem from "./Components/RouteItem/index.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ifChosen:''
    }
  }

  handleClick(index){
    console.log("我是index",index);
  }

  render() {
    return (
      <div id="app">
        <Router>
          <div className="app_header">
            <div className="app_logo">
              <div className="app_logo_inner"></div>
            </div>
            <div className="search_bar">
              <div className="search_logo circle"></div>
              <input
                type="text"
                className="search_text"
                placeholder="在云端软盘中搜索"
              ></input>
              <div className="search_dropdown circle">
                <svg
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10l5 5 5-5z"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
              </div>
            </div>
            <div className="right_bar">
              <div className="right_bar_inner">
                <div className="help_logo circle"></div>
                <div className="settings_logo circle"></div>
                <div className="apps_logo circle"></div>
                <div className="profile_photo"></div>
              </div>
            </div>
          </div>
          <div className="app_body">
            <div className="left_bar">
              <div className="add_new">
                <div className="new_logo"></div>
                <span>新建</span>
              </div>
              <div className="router">
                <Link to="/" onClick = {this.handleClick("MyDisk")}>
                  <RouteItem routeName="MyDisk" ifChosen = "Chosen"></RouteItem>
                </Link>
                <Link to="/ShareToMe">
                  <RouteItem routeName="ShareToMe"></RouteItem>
                </Link>
                <Link to="/UsedRecently">
                  <RouteItem routeName="UsedRecently"></RouteItem>
                </Link>
                <Link to="/Starred">
                  <RouteItem routeName="Starred"></RouteItem>
                </Link>
                <Link to="/Recycle">
                  <RouteItem routeName="Recycle"></RouteItem>
                </Link>
              </div>
              <div className="space_preview">
                <div className="route">存储空间</div>
                <div className="space_chart">
                  <div className="used_text">已使用 1.6 GB，共 15 GB</div>
                  <div className="parallline">
                    <div className="used"></div>
                  </div>
                  <a href="www.google.com" className="buy">
                    购买存储空间
                  </a>
                </div>
              </div>
            </div>
            <div className="pageView">
              <Route path="/" exact component={MyDisk}></Route>
              <Route path="/ShareToMe" component={ShareToMe}></Route>
              <Route path="/UsedRecently" component={UsedRecently}></Route>
              <Route path="/Starred" component={Starred}></Route>
              <Route path="/Recycle" component={Recycle}></Route>
            </div>
            <div className="right_bar">
              <div className="tiny_apps"></div>
              <div className="add_app circle"></div>
              <div className="hide_bar circle"></div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
