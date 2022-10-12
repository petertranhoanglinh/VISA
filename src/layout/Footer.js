import React from 'react'
function Footer(){
    if(localStorage.getItem("checkLogin") === "true"){
        return ( 
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
                </div>
                <strong>Copyright © 2014-2022 <a href="/home">Lweb</a>.</strong> All rights reserved.
           </footer>)
    }else{
        return ( 
            <footer className="main">
                <div className="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
                </div>
                <strong>Copyright © 2014-2022 <a href="/home">Lweb</a>.</strong> All rights reserved.
           </footer>) 
    }
   
}
export default Footer