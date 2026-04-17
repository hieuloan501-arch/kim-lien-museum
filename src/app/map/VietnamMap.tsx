"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function VietnamMap() {
  return (
    <MapContainer center={[16, 108]} zoom={5} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[21.0285, 105.8542]}>
        <Popup>Hà Nội - nơi Bác đọc Tuyên ngôn độc lập</Popup>
      </Marker>

      <Marker position={[10.8231, 106.6297]}>
        <Popup>TP.HCM - Bến Nhà Rồng</Popup>
      </Marker>

      <Marker position={[18.67, 105.57]}>
        <Popup>Kim Liên - quê hương Bác</Popup>
      </Marker>
    </MapContainer>
  );
}