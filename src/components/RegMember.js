function RegMember(){
    return ( <section className="content">
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
                  <input type="text" name="email" className="form-control" id="exampleInputEmail1"  aria-describedby="exampleInputEmail1-error" aria-invalid="true" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Số Điện Thoại</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1"  aria-describedby="exampleInputPassword1-error" aria-invalid="true" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Địa Chỉ Liên Hệ</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1"  aria-describedby="exampleInputPassword1-error" aria-invalid="true" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Địa Chỉ Email</label>
                  <input type="email" name="password" className="form-control" id="exampleInputPassword1"  aria-describedby="exampleInputPassword1-error" aria-invalid="true" />
                </div>
                
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          {/* /.card */}
        </div>
        {/*/.col (left) */}
        {/* right column */}
        <div className="col-md-6">
        </div>
        {/*/.col (right) */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>)
}
export default RegMember;