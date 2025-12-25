// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import cityCenters from "src/data/cityCenters";
// import "leaflet/dist/leaflet.css";

// export default function MapEngine({ city }) {
//   if (!city || !cityCenters[city]) return null;

//   const position = cityCenters[city];

//   return (
//   <div style={{ width: "100%", height: "200px", background: "red" }}>
//       <MapContainer
//         center={position}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution="&copy; OpenStreetMap contributors"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} />
//       </MapContainer>
//     </div>
//   );
// }
////
// src/components/modules/MapEngine.jsx
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import cityCenters from "src/data/cityCenters";

function MapEngine({ city }) {
  if (!city || !cityCenters[city]) return null;

  const position = cityCenters[city];

  return (
    <div style={{ height: "250px", width: "100%", marginBottom: "20px" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}   // 👈 مثل دیوار (غیرقابل حرکت)
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>

      <p style={{ fontSize: "12px", color: "#666" }}>
        📍 محدوده تقریبی آگهی
      </p>
    </div>
  );
}

export default MapEngine;
