import swal from "sweetalert";
// web

var URL_REST = localStorage.getItem("URL_REST");
var URL = localStorage.getItem("URL");

function setKind(kind){
  if(kind === "local"){
    localStorage.setItem("URL_REST","http://localhost:8888/")
    localStorage.setItem("URL","http://localhost:3333/")
  }else{
    localStorage.setItem("URL_REST","https://kalivisabe.herokuapp.com/")
    localStorage.setItem("URL","https://kali-visa.herokuapp.com/")
  }

}
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
function coverSwal(text, icon) {
  swal(text, {
    buttons: {
      OK: true,
    },
    icon: icon,
  }).then((value) => {
    switch (value) {
      case "OK":
        window.location.reload(true);
        break;
      default:
        return false;
    }
  });
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
  coverSwal,
  setKind,
};
