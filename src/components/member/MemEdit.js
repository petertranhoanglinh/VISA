import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Util from "../util/Util";
function MemEdit() {
  let { userId } = useParams();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState({ cons: {} });
  useEffect(() => {
    const getCons = async () => {
      getData();
    };
    getCons();
  }, []);
  const handleInput = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      name: name,
      mobile: mobile,
      email: email,
      address: address,
      id:data.cons.id
    });

    var requestOptions = {
      method: "POST",
      headers: Util.headersList,
      body: raw,
      redirect: "follow",
    };
    fetch(Util.URL_REST + "api/consumer/save", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        if (result.status === "0001") {
          // eslint-disable-next-line no-unused-expressions
          Util.swal("", result.returnMessage, "success").then (function() {
            window.location.href = Util.URL + "memsearch";
          });
    
        } else {
          Util.swal("", result.returnMessage, "error");
        }
      })
      .catch((error) => {
        Util.swal("", "Please login again", "error");
      });
  };
  function getData() {
    fetch(`${Util.URL_REST}api/consumer/all/${userId}/1`, {
      method: "GET",
      headers: Util.headersList,
    })
      .then((res) => res.json())
      .then((json) => {
        setData({ cons: json[0] });
        setName(json[0].name);
        setEmail(json[0].email);
        setMobile(json[0].mobile);
        setAddress(json[0].address);
      });
  }
  return (
    <div className="content-wrapper">
      <section class="content">
        <div className="container-fluid">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">
                Change Info Member <span style={{color:'blue'}}> {data.cons.name}</span>
              </h3>
            </div>
            <div className="card-body">
              {/* Color Picker */}
              <div className="form-group">
                <label>Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  className="form-control my-colorpicker1 colorpicker-element"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>
                  Number Phone{" "}
                  <small style={{ color: "red" }}>
                    (The phone number cannot be duplicated in the system)
                  </small>
                </label>
                <input
                  name="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  type="number"
                  className="form-control my-colorpicker1 colorpicker-element"
                />
              </div>
              {/* /.form group */}
              {/* Color Picker */}
              <div className="form-group">
                <label>Email:</label>
                <div className="input-group my-colorpicker2 colorpicker-element">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    value={email}
                    className="form-control"
                  />
                </div>
                {/* /.input group */}
              </div>
              {/* /.form group */}
              {/* time Picker */}
              <div className="bootstrap-timepicker">
                <div className="form-group">
                  <label>Address:</label>
                  <div className="input-group date">
                    <input
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      type="text"
                      className="form-control datetimepicker-input"
                    />
                    {/* <div className="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                  <div className="input-group-text"><i className="far fa-clock" /></div>
                </div> */}
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-primary"
                onClick={() => handleInput()}>
                  Change save
                </button>
              </div>
            </div>

            {/* /.card-body */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default MemEdit;
