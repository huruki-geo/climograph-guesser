
import React, { useEffect, useRef } from 'react';
import L from 'leaflet'; // Import Leaflet
import "leaflet/dist/leaflet.css";

export interface MapPin {
  latitude: number;
  longitude: number;
  popupText?: string;
  color?: 'blue' | 'red' | 'green'; // For different marker colors potentially
}

interface MapDisplayProps {
  center: [number, number];
  zoom: number;
  pins?: MapPin[];
  onClick?: (lat: number, lng: number) => void;
  style?: React.CSSProperties;
  className?: string;
}

// Default icon fix for Webpack/Parcel issues with Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


const MapDisplay: React.FC<MapDisplayProps> = ({ center, zoom, pins, onClick, style, className }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView(center, zoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      if (onClick) {
        mapRef.current.on('click', (e: L.LeafletMouseEvent) => {
          onClick(e.latlng.lat, e.latlng.lng);
        });
      }
    }
    
    // Cleanup map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClick]); // Only re-run if onClick changes to re-attach listener, center/zoom are for initial setup.

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  useEffect(() => {
    if (mapRef.current) {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];

      if (pins) {
        pins.forEach(pin => {
          // Custom icons if needed
          // let iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
          // if (pin.color === 'red') iconUrl = 'path_to_red_marker.png'; // Placeholder
          // const customIcon = L.icon({ iconUrl, shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] });
          // const marker = L.marker([pin.latitude, pin.longitude], { icon: customIcon }).addTo(mapRef.current!);
          
          const marker = L.marker([pin.latitude, pin.longitude]).addTo(mapRef.current!);
          if (pin.popupText) {
            marker.bindPopup(pin.popupText);
          }
          markersRef.current.push(marker);
        });
      }
    }
  }, [pins]);

  return <div ref={mapContainerRef} style={style} className={className || "h-96 w-full rounded-lg shadow-md"} />;
};

export default MapDisplay;
    