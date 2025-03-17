import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [ciudades, setCiudades] = useState([]);
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);

    useEffect(() => {
        fetch('/weather.json')
            .then(response => {
                if (!response.ok) throw new Error('Error al cargar datos');
                return response.json();
            })
            .then(data => {
                setCiudades(data.ciudades);
                setCiudadSeleccionada(data.ciudades[1]);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <WeatherContext.Provider value={{ ciudades, ciudadSeleccionada, setCiudadSeleccionada }}>
            {children}
        </WeatherContext.Provider>
    );
}