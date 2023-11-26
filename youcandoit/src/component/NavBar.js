import {useState, useEffect} from 'react';
import { Nav,Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/logo.jpeg';
import navIcon1 from '../assets/img/nav-icon.png';
import navIcon2 from '../assets/img/nav-icon.png';
import navIcon3 from '../assets/img/nav-icon.png';



const NavBar = () => {

    const {activeLink, setActiveLink} = useState('home');

    const [scrolled, setScrolled] = useState(('false'));

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50 ){
                scrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    })

    const onUpdateActiveLink= (value) => {
        setActiveLink(value);
    }

    return( 
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container fluid>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#rending" className={activeLink === 'home'? 'actve navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>회사소개</Nav.Link>
                    <Nav.Link href="#service" className={activeLink === 'service'? 'actve navbar-link':'navbar-link'}  onClick={()=> onUpdateActiveLink('service')}>서비스소개</Nav.Link>
                    <Nav.Link href="#install" className={activeLink === 'install'? 'actve navbar-link':'navbar-link'}  onClick={()=> onUpdateActiveLink('install')}>설치안내</Nav.Link>
                    <Nav.Link href="#community" className={activeLink === 'community'? 'actve navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('community')}>고객센터</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""></img></a>
                        <a href="#"><img src={navIcon2} alt=""></img></a>
                        <a href="#"><img src={navIcon3} alt=""></img></a>
                    </div>
                    <button className="vvd" onClick={()=> console.log('commet')}>됐니?</button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );

    
}
export default NavBar;