import { MapPin, ExternalLink } from "lucide-react";

const ADDRESS = "R. Maj. Maragliano, 241 - Vila Mariana, São Paulo - SP, 04017-030";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export function LocationMap() {
  return (
    <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl bg-sand p-8 text-center shadow-soft">
      <MapPin className="mb-4 h-10 w-10 text-sage" />
      <p className="font-serif text-xl text-foreground">{ADDRESS}</p>
      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep"
      >
        Abrir no Google Maps <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
