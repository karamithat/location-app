import React from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import Navbar from "../components/Navbar";
import locationData from "../data.json";
import L from "leaflet";

const Home = () => {
  const multiPolyline = locationData.map((location) => {
    return [location.lat, location.long];
  });

  const colorOptions = { color: "#267FCA" };
  const position = [39.95, 32.85];

  const GetIcon = (iconPng) => {
    return L.icon({
      iconUrl: require("../assets/" + iconPng + ".png"),
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
    });
  }

  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <MapContainer
          className="container"
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ width: "100vw", height: "70vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locationData.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.long]}
              icon={GetIcon(location.iconPng)}
            >
              <Popup>{location.district}</Popup>
            </Marker>
          ))}
          <Polyline pathOptions={colorOptions} positions={multiPolyline} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
