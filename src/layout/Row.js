/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import Util from "../components/util/Util";
function Row() {
  var show = "";
  if(localStorage.getItem("checkLogin")){
       show = "hide";
     }else{
      show = "none";
     }
  // const [show, setShow] = useState("");
  // if(localStorage.getItem("checkLogin")){
  //   setShow({ show: "hide" });
  // }else{
  //   setShow({ show: "none" });
  // }
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="../../index3.html" className="brand-link">
        <img
          src="https://i.pinimg.com/originals/f8/ee/fc/f8eefcbe4d08d731669690c716b2d9c9.png"
          alt="Lweb"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Lweb</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <button className="btn btn-sidebar" style={{display:show}} onClick={logout}>
            <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
          <div className="sidebar-search-results">
            <div className="list-group">
              <a href="1" className="list-group-item">
                <div className="search-title">
                  <strong className="text-light" />N
                  <strong className="text-light" />o
                  <strong className="text-light" />{" "}
                  <strong className="text-light" />e
                  <strong className="text-light" />l
                  <strong className="text-light" />e
                  <strong className="text-light" />m
                  <strong className="text-light" />e
                  <strong className="text-light" />n
                  <strong className="text-light" />t
                  <strong className="text-light" />{" "}
                  <strong className="text-light" />f
                  <strong className="text-light" />o
                  <strong className="text-light" />u
                  <strong className="text-light" />n
                  <strong className="text-light" />d
                  <strong className="text-light" />!
                  <strong className="text-light" />
                </div>
                <div className="search-path" />
              </a>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
               <br /> with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Thành viên
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to ={"/regmember"} className="nav-link">
                    <i className="fa-solid fa-user-plus" style={{marginLeft:10}}></i>
                    <p style={{marginLeft:10}}>Đăng ký thành viên</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/memsearch"} className="nav-link" >
                    <i className="fa-solid fa-users-between-lines" style={{marginLeft:5}}></i>
                    <p style={{marginLeft:10}}>Tìm Kiếm Thành Viên</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="1" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Đặt hàng
                  <i className="fas fa-angle-left right"  style={{marginLeft:5}}/>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to = {"/addorder"} className="nav-link">
                  <i className="fa-solid fa-plus" style={{marginLeft:5}}></i>
                    <p style={{marginLeft:10}}>Tạo đơn hàng</p>
                  </Link>
                </li>
                <li className="nav-item">
                <Link to={"/searchorder"} className="nav-link">
                    <i className="fa-solid fa-magnifying-glass" style={{marginLeft:5}}></i>
                    <p style={{marginLeft:10}}>Tìm kiếm đơn hàng</p>
                </Link>
                </li>
                <li className="nav-item">
                  <Link to="/anaorder" className="nav-link">
                  <i className="fa-solid fa-magnifying-glass-chart" style={{marginLeft:5}}></i>
                    <p style={{marginLeft:10}}>Thống kê đặt hàng</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Tiện ích biểu đồ 
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Coin Table</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Chart Coin</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Chart Register Member</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Chart Order</p>
                  </a>
                </li>
              </ul>
            </li>
             {/*
            <li className="nav-item">
              <a href="1" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p>
                  Forms
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../forms/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>General Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/advanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Advanced Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/editors.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Editors</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/validation.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Validation</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="1" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Tables
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>
            <li className="nav-item">
              <a href="../calendar.html" className="nav-link">
                <i className="nav-icon far fa-calendar-alt" />
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../gallery.html" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>Gallery</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../kanban.html" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>Kanban Board</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="1" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                <p>
                  Mailbox
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../mailbox/mailbox.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Inbox</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../mailbox/compose.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Compose</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../mailbox/read-mail.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a href="1" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Pages
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../examples/invoice.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Invoice</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/profile.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/e-commerce.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>E-commerce</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/projects.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Projects</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project-add.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Project Add</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/project-edit.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Project Edit</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="../examples/project-detail.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Project Detail</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/contacts.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contacts</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/faq.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>FAQ</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/contact-us.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Contact us</p>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
export default Row;
function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("checkLogin");
    localStorage.removeItem("userItem");
    localStorage.removeItem("photo");
    localStorage.removeItem("userDetail");
    window.location.href = Util.URL + "login";
  
}
