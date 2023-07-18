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
        setPosition([51.505, -0.09]);
      }
    );
  }, []);

  return (
    <>
      <div className="pt-20 ">
        <div className="bg-gray-700">
          <div className="w-full h-64 flex justify-center items-center">
            {position && (
              <MapContainer center={position} zoom={13} className="w-full h-full">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                />
                <Marker position={position} />
              </MapContainer>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
