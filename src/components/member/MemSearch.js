import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { Link} from "react-router-dom";
import Util from "../util/Util";
function MemSearch(props) {
  const [data, setData] = useState({ cons: [] });
  const [mobile, setMobile] = useState(["*"]);
  const [activePage, setActivePage] = useState([]);
  // using user effect;
  useEffect(() => {
    const getCons = async () => {
      getData(1);
    };
    getCons();
  }, []);
  // delete consumer
  function deleteConsumer(id){
    Util.swal({
      text: "Bạn muốn xóa khách hàng " + id + " Khỏi hệ thống ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(Util.URL_REST + "api/consumer/delete/" + id, {
          method: "PUT",
          headers: Util.headersList,
        })
          .then((res) => res.json())
          .then((json) => {
            if (json.status === "0001") {
              Util.swal("", json.returnMessage, "success");
              getData(1);
            } else {
              Util.swal("", json.returnMessage, "error");
            }
          });
      } else {
        return false;
      }
    });
  };
  function getData(page){
    fetch(Util.URL_REST + "api/consumer/all/" + mobile +'/'+page, {
      method: "GET",
      headers: Util.headersList,
    })
      .then((res) => res.json())
      .then((json) => {
        setData({ cons: json });
      });
  }
  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    getData(pageNumber);
  }
  return (
    <div class="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Thông Tin Thành Viên</h3>
                  <div className="card-tools">
                    <div className="input-group input-group-sm">
                      <input   onChange={(e) => setMobile(e.target.value)}
                        type="text"
                        name="mobile"
                        className="form-control float-right"
                        placeholder="Search mobile"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-default"  onClick={(e) => getData(1)}>
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-200">
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>Xóa</th>
                        <th>Sửa</th>
                        <th>Số TV</th>
                        <th>Tên TV</th>
                        <th>Ngày Đăng Ký</th>
                        <th>Số Điện Thoại</th>
                        <th>Địa chỉ</th>
                        <th>Người Quản Lý</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.cons.map((d) => (
                        <tr>
                          <td>
                            <i
                              class="bi bi-trash"
                              onClick={() => deleteConsumer(d.id)}
                            ></i>
                          </td>
                          <td>
                          <Link to={"/memedit/"+d.mobile}> <i class="fa-regular fa-pen-to-square"></i></Link>
                          </td>
                          <td>{d.id}</td>
                          <td>{d.name}</td>
                          <td>{d.workDate}</td>
                          <td>{d.mobile}</td>
                          <td>{d.address}</td>
                          <td>{d.workUser}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={4500}
        onChange={handlePageChange.bind(this)}
      />
    </div>
  );
}
export default MemSearch;
