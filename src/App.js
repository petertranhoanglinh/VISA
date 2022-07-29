import Nav from './layout/Nav'
import Row from './layout/Row'
import Home from './components/Home'
import Footer from './layout/Footer'
import RegMember from './components/member/RegMember'
import MemSearch from './components/member/MemSearch'
import MemEdit from './components/member/MemEdit'
import {Routes, Route} from 'react-router-dom'
function App(){
  return (
    <div>
       <div class="preloader flex-column justify-content-center align-items-center">
          <img class="animation__shake" src="http://kalivisa.com/wp-content/uploads/2022/04/111111111111111.png" alt="VISA"
                 className="brand-image img-circle elevation-3" height="60" width="60"/>
      </div>
        <Nav></Nav>
        <Row></Row>
          <Routes>
            <Route path='/' element = {<Home></Home>}></Route>
             {/* Member  */}
            <Route path='/regmember' element = {<RegMember></RegMember>}></Route>
            <Route path='/memedit' element = {<MemEdit></MemEdit>}></Route>
            <Route path='/memsearch' element = {<MemSearch></MemSearch>}></Route>
           
          </Routes>
        <Footer></Footer>
        <aside class="control-sidebar control-sidebar-dark"></aside>
    </div>
    // Route path='/' element = {<Home></Home>}/>
  )
}
export default App;
