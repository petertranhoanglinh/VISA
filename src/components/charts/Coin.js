import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Util from "../util/Util";
function Coin(props) {
  const [data, setData] = useState({ coins: [] });
  const [activePage, setActivePage] = useState('');
  // using user effect;
  useEffect(() => {
    const getCoin = async () => {
      getData(1);
    };
    getCoin();
  }, []);
  // delete consumer
//   function deleteConsumer(id){
//     Util.swal({
//       text: "Bạn muốn xóa khách hàng " + id + " Khỏi hệ thống ?",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         fetch(Util.URL_REST + "api/consumer/delete/" + id, {
//           method: "PUT",
//           headers: Util.headersList,
//         })
//           .then((res) => res.json())
//           .then((json) => {
//             if (json.status === "0001") {
//               Util.swal("", json.returnMessage, "success");
//               getData(1);
//             } else {
//               Util.swal("", json.returnMessage, "error");
//             }
//           });
//       } else {
//         return false;
//       }
//     });
//   };
  function getData(page){
    fetch(Util.URL_SERVICE + "api/coin/getAllCoin/"+page, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((json) => {
        setData({ coins: json });
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
                  <h3 className="card-title">Coin table</h3>
                  <div className="card-tools">
                    <div className="input-group input-group-sm">
                      <div className="input-group-append">
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-200">
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>Coin Id</th>
                        <th>Coin Name</th>
                        <th>Price</th>
                        <th>Update time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.coins.map((d) => (
                        <tr key={d.id}>
                          <td>{d.coinId}</td>
                          <td>{d.coinName}</td>
                          <td>{d.price}</td>
                          <td>{d.timeUpdate}</td>
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
export default Coin;
