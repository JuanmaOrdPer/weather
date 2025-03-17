import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { Card } from 'react-bootstrap';

function WeatherCarousel() {
    const {ciudadSeleccionada } = useContext(WeatherContext);

    if (!ciudadSeleccionada) return <div>Cargando...</div>;

    return (
        <Carousel variant='dark' className='my-3 border-none shadow' interval={5000}>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
                <Carousel.Item key={index} style={{ height: '80vh' }}>
                    <Card className="d-flex flex-column align-items-center justify-content-center h-90">
                    <Card.Img
                            src={`/${ciudadSeleccionada.nombre.toLowerCase()}.jpeg`}
                            alt={ciudadSeleccionada.nombre}
                            style={{objectFit: 'cover', borderRadius: '5px'}}/>
                        <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center h-100 p-3 my-3 text-white">
                        <Card.Header className="text-center my-5 fw-bold fs-3 bg-transparent border-0">{fecha.fecha} {ciudadSeleccionada.nombre}  </Card.Header>
                        <Card.Body className="mt-5 text-center">
                            <Card.Text>
                                Máx: {fecha.temperatura.maxima}°C / Mín: {fecha.temperatura.minima}°C<br/>
                                Viento: {fecha.viento.velocidad} km/h ({fecha.viento.direccion})<br/>
                                Precipitación: {fecha.lluvia} mm<br/>
                                Salida: {fecha.sol.salida} | Puesta: {fecha.sol.puesta}
                            </Card.Text>
                        </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default WeatherCarousel;