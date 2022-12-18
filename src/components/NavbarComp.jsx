import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, NavLink } from 'react-router-dom';
import '../styles/NavbarComp.scss'

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand className='link' to="/">Cálculo de la Tasa Metabólica Basal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" data-testid='tested' >
            <NavLink className='link' to="/">Inicio</NavLink>
            <NavLink className='link' to="/recetas">Recetas</NavLink>
            <NavLink className='link' to="/informacion">Información</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet />
    </section>
    </>
    
  );
}

export default NavbarComp;