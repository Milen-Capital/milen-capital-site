"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Imagen con reemplazo automático (igual que antes) que además usa la
// optimización de imágenes de Next.js: la sirve ya redimensionada,
// comprimida y en un formato moderno (WebP/AVIF) según el dispositivo,
// en vez de descargar el archivo original completo.
//
// El chequeo de "img.complete" al montar es necesario porque, con HTML
// generado en el servidor, la imagen puede terminar de cargar antes de
// que React conecte el evento "onLoad" — sin esto, "onLoad" nunca se
// dispara y el estado de carga queda desincronizado.
export default function FallbackImage({
  src,
  alt,
  className,
  fallback,
  onLoad,
  fill = true,
  width,
  height,
  sizes,
  quality,
  unoptimized,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
  onLoad?: () => void;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
  // Sirve el archivo tal cual, sin pasar por el redimensionado bajo demanda
  // (útil para imágenes que ya vienen livianas y prearmadas: evita la
  // espera de esa primera transformación en cada tamaño nuevo).
  unoptimized?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth === 0) {
        setFailed(true);
      } else {
        onLoad?.();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (failed) {
    return <>{fallback}</>;
  }

  if (fill) {
    return (
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        quality={quality}
        unoptimized={unoptimized}
        className={className}
        onError={() => setFailed(true)}
        onLoad={onLoad}
      />
    );
  }

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={width ?? 64}
      height={height ?? 64}
      sizes={sizes}
      quality={quality}
      unoptimized={unoptimized}
      className={className}
      onError={() => setFailed(true)}
      onLoad={onLoad}
    />
  );
}
