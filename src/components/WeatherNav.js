import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { WeatherContext } from '../context/WeatherContext';
import Container from 'react-bootstrap/Container';

function WeatherNav() {
    const { ciudades } = useContext(WeatherContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary mr-2">
            <Container fluid>
            <Navbar.Brand as={Link} to="/" style={{ color: "black" }}  className='mx-5'>
                Inicio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-5">
                    <NavDropdown title="Ciudades" id="basic-nav-dropdown" className='float-end'>
                        {ciudades.map(ciudad => (
                            <NavDropdown.Item
                                as={Link}
                                to={`/ciudad/${encodeURIComponent(ciudad.nombre)}`}
                                key={ciudad.nombre}
                            >
                                {ciudad.nombre}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default WeatherNav;