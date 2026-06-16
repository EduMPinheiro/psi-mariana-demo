import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const ADDRESS = "R. Maj. Maragliano, 241 - Vila Mariana, São Paulo - SP, 04017-030";
const COORDS = { lat: -23.5897, lng: -46.6402 };
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

declare global {
  interface Window {
    google?: any;
    __initMarianaMap?: () => void;
  }
}

export function LocationMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  // Chave pública do Google Maps JavaScript API.
  // Defina VITE_GOOGLE_MAPS_API_KEY no .env do ambiente onde você hospedar o site.
  // Restrinja a chave por HTTP referrer no Google Cloud Console para o(s) seu(s) domínio(s).
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  useEffect(() => {
    if (!apiKey || !ref.current) {
      if (!apiKey) setFailed(true);
      return;
    }

    const render = () => {
      if (!window.google?.maps || !ref.current) return;
      const map = new window.google.maps.Map(ref.current, {
        center: COORDS,
        zoom: 16,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });
      new window.google.maps.Marker({
        position: COORDS,
        map,
        title: "Mariana Oliveira — Psicóloga Clínica",
      });
    };

    if (window.google?.maps) {
      render();
      return;
    }

    const existing = document.getElementById("gmaps-js");
    if (existing) {
      window.__initMarianaMap = render;
      return;
    }

    window.__initMarianaMap = render;
    const script = document.createElement("script");
    script.id = "gmaps-js";
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&callback=__initMarianaMap`;
    script.onerror = () => setFailed(true);
    document.head.appendChild(script);
  }, [apiKey]);

  if (failed) {
    return (
      <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl bg-sand p-8 text-center shadow-soft">
        <MapPin className="mb-4 h-10 w-10 text-sage" />
        <p className="font-serif text-xl text-foreground">{ADDRESS}</p>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex items-center gap-2 text-sage hover:text-sage-deep"
        >
          Abrir no Google Maps <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl shadow-warm">
      <div ref={ref} className="absolute inset-0" />
    </div>
  );
}
