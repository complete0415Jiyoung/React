import './App.css';

import { Button, Navbar, Container, Nav, NavDropdown, Form, Offcanvas }  from 'react-bootstrap';
import { Row, Col }  from 'react-bootstrap';
import BgImage from './image/img1.png'
import { useState } from 'react';
import data from './data.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';

function App() {

  let [shoes , setShoes] = useState( data )
  let navigate = useNavigate(); 
  // 훅: use 뭐 어쩌구 저쩌구 이런걸 훅이라고 함



  return (
    <div className="App">
    
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={
          <>
            <div className='main-bg' style={{backgroundImage: 'url('+BgImage+')'}}></div>
            <Container>
              <Row>
                {
                  shoes.map((a, i) => {
                    return(
                      <Card shoes={a} i={i+1}/>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        }/>
        <Route path="/detail/:id" element={ <Detail shoes={shoes}></Detail> } />
        {/* 오류시 나오는 페이지  */}
        <Route path="*" element={ <div>없는 페이지입니다.</div> } />

        <Route path="/about" element={ <About/> }>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>   

        <Route path="/event" element={ <Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스 </div>}/>
          <Route path="two" element={<div>생일기념쿠폰받기</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Event(){
  return(
  <>
    <h4>오늘의 이벤트 </h4>
    <Outlet></Outlet>
  </>    
  )
}

// nested routes언제 - 여러페이지를 여러개 사용할때 
function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}




// 메인 페이지 컴포넌트 
const Card = ( props ) =>{
  return(
    <Col sm>
      <Link to="/detail">
        
        {/* <DetailPage props= {props}></DetailPage> */}
        
        <img  src= {'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </Col>
  )
}






export default App;
