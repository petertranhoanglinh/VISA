import React from 'react'
import swal from "sweetalert";

// local
//var URL_REST = "http://localhost:8888/";
//var URL = "http://localhost:3333/";

//web
var URL_REST = "https://kalivisabe.herokuapp.com/";
var URL = "https://lwebmanager.herokuapp.com/";

//test
//var URL_REST = "https://kalivisabe.herokuapp.com/";
//var URL = "http://localhost:3333/";

var URL_SERVICE = "https://tienaodemo12.herokuapp.com/";
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
  URL_SERVICE
};
