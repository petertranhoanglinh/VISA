import Nav from "./layout/Nav";
import Row from "./layout/Row";
import Home from "./components/Home";
import Footer from "./layout/Footer";
import RegMember from "./components/member/RegMember";
import MemSearch from "./components/member/MemSearch";
import MemEdit from "./components/member/MemEdit";
import Login from "./screen/Login";
import AddOrder from "./components/order/AddOrder"
import { Routes, Route } from "react-router-dom";
import SearchOrder from "./components/order/SearchOrder";
import Util from "./components/util/Util";
import AnaOrder from "./components/order/AnaOrder";
import Coin from "./components/charts/Coin";
function App() {
  checkLogin();
  return (
    <>
      <div class="preloader flex-column justify-content-center align-items-center">
        <img
          class="animation__shake"
          src="https://i.pinimg.com/originals/f8/ee/fc/f8eefcbe4d08d731669690c716b2d9c9.png"
          alt="LWEB5"
          className="brand-image img-circle elevation-3"
          height="60"
          width="60"
        />
      </div>
     
      {localStorage.getItem("checkLogin") === "true" ? (
           <>
            <Nav></Nav>
            <Row></Row>
           </>
          
       ) : (
        null
      )}
      <Routes> <Route path="/home" element={<Home></Home>}></Route></Routes>
      {localStorage.getItem("checkLogin") === "true" ? (
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          {/* login */}
          {/* <Route path="/" element={<Login></Login>}></Route> */}
          {/* Member  */}
          <Route path="/regmember" element={<RegMember></RegMember>}></Route>
          <Route path="/memsearch" element={<MemSearch></MemSearch>}></Route>
          <Route path="memedit/:userId" element={<MemEdit/>} />
          <Route path="/memsearch" element={<MemSearch></MemSearch>}></Route>
          {/* Order  */}
          <Route path="/addorder" element={<AddOrder></AddOrder>}></Route>
          <Route path="/searchorder" element={<SearchOrder></SearchOrder>}></Route>
          <Route path="/anaorder" element={<AnaOrder></AnaOrder>}></Route>
           {/* charts  */}
           <Route path="/coin" element={<Coin></Coin>}></Route>
        </Routes>
      ) : (
        <Login></Login>
        
      )}

      <Footer></Footer>
      <aside class="control-sidebar control-sidebar-dark"></aside>
      </>
    // Route path='/' element = {<Home></Home>}/>
  );
}
export default App;

function checkLogin() {
  fetch(Util.URL_REST + "api/checkLogin/" + localStorage.getItem("token"), {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => {
      if(json === true){
        localStorage.setItem("checkLogin", "true");
      }   
    });
}
