import Nav from './layout/Nav'
import Row from './layout/Row'
import Home from './components/Home'
import Footer from './layout/Footer'
import RegMember from './components/RegMember'
import MemSearch from './components/data/MemSearch'
import {Routes, Route} from 'react-router-dom'
function App(){
  return (
    <div>
        <Nav></Nav>
        <Row></Row>
          <Routes>
            <Route path='/' element = {<Home></Home>}></Route>
            <Route path='/regmember' element = {<RegMember></RegMember>}></Route>
            <Route path='/memsearch' element = {<MemSearch></MemSearch>}></Route>
          </Routes>
        <Footer></Footer>
    </div>
    // Route path='/' element = {<Home></Home>}/>
  )
}
export default App;
