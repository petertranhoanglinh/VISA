function MemEdit(){
    return (
        <div className ="content-wrapper">
            <section class="content"></section>
             <div className="container-fluid">
             <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Thay đổi thông tin thành viên</h3>
        </div>
        <div className="card-body">
          {/* Color Picker */}
          <div className="form-group">
            <label>Tên và SĐT thành viên cần thay đổi</label>
            <input type="text" className="form-control my-colorpicker1 colorpicker-element" data-colorpicker-id={1} data-original-title title />
          </div>
          {/* /.form group */}
          {/* Color Picker */}
          <div className="form-group">
            <label>Thay đổi email:</label>
            <div className="input-group my-colorpicker2 colorpicker-element" data-colorpicker-id={2}>
              <input type="text" className="form-control" data-original-title title />
             
            </div>
            {/* /.input group */}
          </div>
          {/* /.form group */}
          {/* time Picker */}
          <div className="bootstrap-timepicker">
            <div className="form-group">
              <label>Thay đổi địa chỉ:</label>
              <div className="input-group date" id="timepicker" data-target-input="nearest">
                <input type="text" className="form-control datetimepicker-input" data-target="#timepicker" />
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
        </div>
    )
}
export default MemEdit;