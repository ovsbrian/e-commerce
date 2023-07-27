import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export const Contact = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        // Centrar el mapa en una ubicación predeterminada si el usuario no da permiso
        setPosition([34, 5, 56]);
      }
    );
  }, []);

  return (
    <>
      <div className=" pt-16 md:pt-20">
        <div className="mb-40 md:mb-0 ">
          <div className="w-full h-64 flex justify-center items-center absolute -z-10 md:static">
            {position && (
              <MapContainer
                center={position}
                zoom={13}
                className="w-full h-full "
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Marker position={position} />
              </MapContainer>
            )}
          </div>
        </div>
        <div className="flex flex-col m-4 md:m-10 gap-2 pt-28 md:pt-0">
          <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
          <p>123 Calle Falsa, Montevideo, Uruguay</p>
          <p>Teléfono: +598 1234 5678</p>
          <p>Email: info@ejemplo.com</p>
        </div>
      </div>
    </>
  );
};
