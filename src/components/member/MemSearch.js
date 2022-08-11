import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Util from "../util/Util";
function MemSearch(props) {
  const [data, setData] = useState({ cons: [] });
  const [activePage, setActivePage] = useState([]);
  // using user effect;
  useEffect(() => {
    const getCons = async () => {
      fetch(Util.URL_REST + "api/consumer/all/0582163211", {
        method: "GET",
        headers: Util.headersList,
      })
        .then((res) => res.json())
        .then((json) => {
          setData({ cons: json });
        });
    };
    getCons();
  }, []);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    //alert(pageNumber);
  };
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
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
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
                            <i class="bi bi-trash"></i>
                          </td>
                          <td>
                            <i class="fa-regular fa-pen-to-square"></i>
                          </td>
                          <td>{d.id}</td>
                          <td>{d.name}</td>
                          <td>11-7-2014</td>
                          <td> </td>
                          <td></td>
                          <td>Lê thị thu thanh</td>
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
