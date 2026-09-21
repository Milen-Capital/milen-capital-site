// Los posts estáticos guardan solo la fecha ("2026-08-12"); los de Sanity
// guardan fecha y hora completas ("2026-09-21T11:45:00.000Z"). Sin este
// chequeo, agregarle "T00:00:00" a una fecha que ya tiene hora produce un
// string inválido y el navegador muestra "Invalid Date".
export function formatDate(date: string) {
  const parsed = date.includes("T") ? new Date(date) : new Date(`${date}T00:00:00`);
  return parsed.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
