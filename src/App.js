import Nav from './components/Nav'
import Row from './components/Row'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
function App(){
  return (
    <div>
      <Nav></Nav>
      <Row></Row>
      <Home></Home>
      <Routes>
        
      </Routes>
    </div>
  )
}

export default App;
