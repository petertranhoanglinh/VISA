import Nav from "./layout/Nav";
import Row from "./layout/Row";
import Home from "./components/Home";
import Footer from "./layout/Footer";
import RegMember from "./components/member/RegMember";
import MemSearch from "./components/member/MemSearch";
import MemEdit from "./components/member/MemEdit";
import Login from "./screen/Login";
import { Routes, Route } from "react-router-dom";
import Util from "./components/util/Util";
function App() {
  function checkLogin() {
    fetch(Util.URL_REST + "api/checkLogin/" + localStorage.getItem("token"), {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("checkLogin", "true");
      });
  }
  checkLogin();
  return (
    <>
      <div class="preloader flex-column justify-content-center align-items-center">
        <img
          class="animation__shake"
          src="http://kalivisa.com/wp-content/uploads/2022/04/111111111111111.png"
          alt="VISA"
          className="brand-image img-circle elevation-3"
          height="60"
          width="60"
        />
      </div>
      <Nav></Nav>
      <Row></Row>
      {localStorage.getItem("checkLogin") === "true" ? (
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          {/* login */}
          <Route path="/" element={<Login></Login>}></Route>
          {/* Member  */}
          <Route path="/regmember" element={<RegMember></RegMember>}></Route>
          <Route path="/memedit" element={<MemEdit></MemEdit>}></Route>
          <Route path="/memsearch" element={<MemSearch></MemSearch>}></Route>

          <Route path="/memsearch" element={<MemSearch></MemSearch>}></Route>
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
