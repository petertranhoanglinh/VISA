/* eslint-disable jsx-a11y/anchor-is-valid */
//import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Util from "../util/Util";
function AddOrder() {
  // const [name, setName] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");

  // const handleInput = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var raw = JSON.stringify({
  //     name: name,
  //     mobile: mobile,
  //     email: email,
  //     address: address,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: Util.headersList,
  //     body: raw,
  //     redirect: "follow",
  //   };
  //   fetch(Util.URL_REST + "api/consumer/save", requestOptions)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw Error(response.status);
  //     })
  //     .then((result) => {
  //       if (result.status === "0001") {
  //         Util.swal("", result.returnMessage, "success");
  //       } else {
  //         Util.swal("", result.returnMessage, "error");
  //       }
  //     })
  //     .catch((error) => {
  //       Util.swal("", "Please login again", "error");
  //     });
  //};
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Create Order</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={'/home'}>Home</Link></li>
                <li className="breadcrumb-item active">Project Add</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
       <section className="content">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">General</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="inputName">Project Name</label>
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDescription">Project Description</label>
                  <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Status</label>
                  <select id="inputStatus" className="form-control custom-select">
                    <option selected disabled>Select one</option>
                    <option>On Hold</option>
                    <option>Canceled</option>
                    <option>Success</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputClientCompany">Client Company</label>
                  <input type="text" id="inputClientCompany" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputProjectLeader">Project Leader</label>
                  <input type="text" id="inputProjectLeader" className="form-control" />
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          <div className="col-md-6">
            <div className="card card-secondary">
              <div className="card-header">
                <h3 className="card-title">Budget</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="inputEstimatedBudget">Estimated budget</label>
                  <input type="number" id="inputEstimatedBudget" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSpentBudget">Total amount spent</label>
                  <input type="number" id="inputSpentBudget" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                  <input type="number" id="inputEstimatedDuration" className="form-control" />
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a href="#" className="btn btn-secondary">Cancel</a>
            <input type="submit" defaultValue="Create new Project" className="btn btn-success float-right" />
          </div>
        </div>
      </section>
      {/* /.container-fluid */}
    </div>
  );
}
export default AddOrder;
