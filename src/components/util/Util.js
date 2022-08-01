import swal from "sweetalert";
//var URL_REST = "https://tienaodemo12.herokuapp.com/";
var URL_REST = "http://localhost:8888/";
var URL = "http://localhost:3333/";
//var URL = "https://kali-visa.herokuapp.com/";
const token = localStorage.getItem("token");
const AuthStr = "Bearer " + token;
const userDetail = JSON.parse(localStorage.getItem("userDetail"));
let headersList = {
  "Accept-Language": "application/json",
  Authorization: AuthStr,
  "Content-Type": "application/json",
};
let headersListSave = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  Authorization: AuthStr,
  "Accept-Language": "application/json",
};

function setComma(n) {
  var reg = /(^[+-]?\d+)(\d{3})/;
  n += "";
  while (reg.test(n)) {
    n = n.replace(reg, "$1" + "," + "$2");
  }
  return n;
}

function checkLogin() {
  fetch(this.URL_REST + "api/checkLogin/" + localStorage.getItem("token"), {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem("checkLogin", json);
    });
  //window.location.href = this.URL + "home";
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  swal,
  URL,
  URL_REST,
  headersList,
  userDetail,
  headersListSave,
  setComma,
  checkLogin,
};
