import * as React from "react";
import { Component } from "react";

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
            </button>
            <a className="navbar-brand" href="index.html">
              Killing Floor 2 Damage Calculator
            </a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://www.reddit.com/r/killingfloor/">
                  KF Subreddit
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1GDpg2mN1l_86U_RaDug0glFx8cZCuErwxZLiBKl9SyY/edit#gid=2068776317">
                  Killing Floor 2 Stats Spreadsheet
                </a>
              </li>
              <li>
                <a href="hire.html">Hire Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
