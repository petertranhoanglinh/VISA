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
    validateData();
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
          Util.swal("", result.returnMessage, "success");
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
      });
  }
  function validateData(){
    if(name === ""){
      setName(data.cons.name)
    }
    if(mobile === ""){
      setMobile(data.cons.mobile)
    }
    if(address === ""){
      setAddress(data.cons.address)
    }
    if(email === ""){
      setEmail(data.cons.email)
    }
  }
  return (
    <div className="content-wrapper">
      <section class="content">
        <div className="container-fluid">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">
                Thay đổi thông tin thành viên {data.cons.name}
              </h3>
            </div>
            <div className="card-body">
              {/* Color Picker */}
              <div className="form-group">
                <label>Tên thành viên cần thay đổi</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  className="form-control my-colorpicker1 colorpicker-element"
                  value={data.cons.name}
                />
              </div>
              <div className="form-group">
                <label>
                  Số điện thoại{" "}
                  <small style={{ color: "red" }}>
                    (Số điện thoại không được trùng trong hệ thống)
                  </small>
                </label>
                <input
                  name="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  value={data.cons.mobile}
                  type="number"
                  className="form-control my-colorpicker1 colorpicker-element"
                />
              </div>
              {/* /.form group */}
              {/* Color Picker */}
              <div className="form-group">
                <label>Thay đổi email:</label>
                <div className="input-group my-colorpicker2 colorpicker-element">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    value={data.cons.email}
                    className="form-control"
                  />
                </div>
                {/* /.input group */}
              </div>
              {/* /.form group */}
              {/* time Picker */}
              <div className="bootstrap-timepicker">
                <div className="form-group">
                  <label>Thay đổi địa chỉ:</label>
                  <div className="input-group date">
                    <input
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={data.cons.address}
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
                  Thay đổi
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
