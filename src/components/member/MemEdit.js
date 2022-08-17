import React from "react";
import { useParams } from "react-router-dom";

function MemEdit() {
  let { userId } = useParams();
  return (
    <div className="content-wrapper">
      <section class="content">
        <div className="container-fluid">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">
                Thay đổi thông tin thành viên {userId}
              </h3>
            </div>
            <div className="card-body">
              {/* Color Picker */}
              <div className="form-group">
                <label>Tên thành viên cần thay đổi</label>
                <input
                  type="text"
                  className="form-control my-colorpicker1 colorpicker-element"
                  data-colorpicker-id={1}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type="number"
                  className="form-control my-colorpicker1 colorpicker-element"
                  placeholder="Số điện thoại không được trùng trong hệ thống"
                />
              </div>
              {/* /.form group */}
              {/* Color Picker */}
              <div className="form-group">
                <label>Thay đổi email:</label>
                <div
                  className="input-group my-colorpicker2 colorpicker-element"
                  data-colorpicker-id={2}
                >
                  <input type="text" className="form-control" />
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
                      type="text"
                      className="form-control datetimepicker-input"
                      data-target="#timepicker"
                    />
                    {/* <div className="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                  <div className="input-group-text"><i className="far fa-clock" /></div>
                </div> */}
                  </div>
                  {/* /.input group */}
                </div>
                {/* /.form group */}
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
