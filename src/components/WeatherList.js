import { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { WeatherContext } from '../context/WeatherContext';
import Container from 'react-bootstrap/Container';


function CityList() {
    const { ciudades, setCiudadSeleccionada } = useContext(WeatherContext);

    return (
      <Container fluid className=' justify-content-center'>
        <ListGroup horizontal className='gap-5 ms-5' style={{width : '20rem'}}>
            {ciudades.map(ciudad => (
                <ListGroup.Item key={ciudad.nombre}>
                    {ciudad.nombre}
                    <Button variant="primary" className="float-end" onClick={() => setCiudadSeleccionada(ciudad)}>Seleccionar</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
        </Container>

    );
}

export default CityList;