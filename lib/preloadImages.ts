// Descarga las imágenes en segundo plano, sin mostrarlas, para que ya
// estén en la caché del navegador cuando el usuario haga clic y cambie
// de opción. Así la foto aparece al instante en vez de esperar la red
// en cada clic (útil incluso con archivos livianos, cuando la latencia
// hasta el servidor es el principal cuello de botella).
export function preloadImages(urls: string[]) {
  if (typeof window === "undefined") return;
  for (const url of urls) {
    const img = new window.Image();
    img.src = url;
  }
}
