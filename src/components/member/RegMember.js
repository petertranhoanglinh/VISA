import React, { useState } from "react";
import Util from "../util/Util";
function RegMember() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleInput = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      name: name,
      mobile: mobile,
      email: email,
      address: address,
    });

    var requestOptions = {
      method: "POST",
      headers: Util.headersList,
      body: raw,
      redirect: "follow",
    };
    fetch(Util.URL_REST + "consumer/save", requestOptions)
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
        alert("consumer fail");
      });
  };
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="row">
          {/* left column */}
          <div className="col-md-12">
            {/* jquery validation */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Đăng Ký Thành Viên</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form id="quickForm" noValidate="novalidate">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Họ Và Tên</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="exampleInputEmail1-error"
                      aria-invalid="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Số Điện Thoại</label>
                    <input
                      type="text"
                      onChange={(e) => setMobile(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      aria-describedby="exampleInputPassword1-error"
                      aria-invalid="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Địa Chỉ Liên Hệ
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      aria-describedby="exampleInputPassword1-error"
                      aria-invalid="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Địa Chỉ Email</label>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      aria-describedby="exampleInputPassword1-error"
                      aria-invalid="true"
                    />
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleInput()}
                  >
                    Lưu
                  </button>
                </div>
              </form>
            </div>
            {/* /.card */}
          </div>
          {/*/.col (left) */}
          {/* right column */}
          <div className="col-md-6"></div>
          {/*/.col (right) */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </div>
  );
}
export default RegMember;
