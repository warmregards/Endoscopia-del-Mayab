// /components/MapEmbed.tsx
export default function MapEmbed() {
  // Public envs (these get inlined into the client bundle at build)
  const placeId = process.env.NEXT_PUBLIC_GBP_PLACE_ID || "";
  const apiKey  = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!placeId || !apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("MapEmbed: missing NEXT_PUBLIC_GBP_PLACE_ID or NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.");
    }
    return (
      <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Mapa de ubicación - Mérida, Yucatán</p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
      title="Ubicación de Endoscopia del Mayab"
    />
  );
}
