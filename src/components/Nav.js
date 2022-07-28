/* eslint-disable jsx-a11y/role-supports-aria-props */

import React from 'react';

function  Nav(){
    return (
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
      <div className="container">
        <a href="../../index3.html" className="navbar-brand">
          <img src="http://kalivisa.com/wp-content/uploads/2022/04/111111111111111.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8', width: '80px'}} />
          <span className="brand-text font-weight-light">VISA</span>
        </a>
        <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="index3.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="1" className="nav-link">Contact</a>
            </li>
            <li className="nav-item dropdown">
              <a id="dropdownSubMenu1" href="1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Dropdown</a>
              <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                <li><a href="1" className="dropdown-item">Some action </a></li>
                <li><a href="1" className="dropdown-item">Some other action</a></li>
                <li className="dropdown-divider" />
                {/* Level two dropdown*/}
                <li className="dropdown-submenu dropdown-hover">
                  <a id="dropdownSubMenu2" href="1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Hover for action</a>
                  <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                    <li>
                      <a tabIndex={-1} href="1" className="dropdown-item">level 2</a>
                    </li>
                    {/* Level three dropdown*/}
                    <li className="dropdown-submenu">
                      <a id="dropdownSubMenu3" href="1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">level 2</a>
                      <ul aria-labelledby="dropdownSubMenu3" className="dropdown-menu border-0 shadow">
                        <li><a href="1" className="dropdown-item">3rd level</a></li>
                        <li><a href="1" className="dropdown-item">3rd level</a></li>
                      </ul>
                    </li>
                    {/* End Level three */}
                    <li><a href="1" className="dropdown-item">level 2</a></li>
                    <li><a href="1" className="dropdown-item">level 2</a></li>
                  </ul>
                </li>
                {/* End Level two */}
              </ul>
            </li>
          </ul>
          {/* SEARCH FORM */}
          <form className="form-inline ml-0 ml-md-3">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Right navbar links */}
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="1">
              <i className="fas fa-comments" />
              <span className="badge badge-danger navbar-badge"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="1" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item dropdown-footer">See All Messages</a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="1">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-header">15 Notifications</span>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="1" className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="1" role="button">
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
}
export default Nav
