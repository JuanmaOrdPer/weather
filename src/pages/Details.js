import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Table from 'react-bootstrap/Table';

function Details() {
    const { nombre } = useParams();
    const { ciudades } = useContext(WeatherContext);
    const ciudad = ciudades.find(c => c.nombre === decodeURIComponent(nombre));

    if (!ciudad) return <div className="text-center mt-5">Ciudad no encontrada</div>;

    return (
        <div className="container mt-4 ">
            <h1 className="text-center mb-4">{ciudad.nombre}</h1>
            
            <Table striped bordered hover responsive className="align-middle text-center">
                <thead className="table-light text-center">
                    <tr>
                        <th>Dato</th>
                        {ciudad.fechas.map(fecha => (
                            <th key={fecha.fecha}>{fecha.fecha}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {/* Temperaturas */}
                    <tr>
                        <td>Máx (°C)</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`max-${fecha.fecha}`} >
                                {fecha.temperatura.maxima}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mín (°C)</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`min-${fecha.fecha}`}>
                                {fecha.temperatura.minima}
                            </td>
                        ))}
                    </tr>

                    {/* Viento */}
                    <tr>
                        <td>Velocidad (km/h)</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`wind-${fecha.fecha}`}>
                                {fecha.viento.velocidad}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Direccion viento</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`dir-${fecha.fecha}`}>
                                {fecha.viento.direccion}
                            </td>
                        ))}
                    </tr>

                    {/* Lluvia */}
                    <tr>
                        <td>Precipitación (mm)</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`rain-${fecha.fecha}`}>
                                {fecha.lluvia}
                            </td>
                        ))}
                    </tr>

                    {/* Sol */}
                    <tr>
                        <td>Salida</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`sunrise-${fecha.fecha}`}>
                                {fecha.sol.salida}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Puesta</td>
                        {ciudad.fechas.map(fecha => (
                            <td key={`sunset-${fecha.fecha}`}>
                                {fecha.sol.puesta}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Details;